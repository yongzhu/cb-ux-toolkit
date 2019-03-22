buildRepo = "cb-ux-toolkit"
productName = "CB-UX-Toolkit"
buildName = "cut"
organization = 'com.careerbuilder.ux.toolkit'

isMaster = env.BRANCH_NAME == "master"
// Any build on master will not be a ci build. Master is for releases ONLY
ciBuild = env.BRANCH_NAME != "master"
// We'll be concerned with pre-releases on develop ONLY if "publishPackage" is set.
preReleaseBuild = env.BRANCH_NAME == "develop"
// Publish package can be defaulted to true if we're on master;
// an additional check will happen for preReleaseBuilds
publishPackage = false

stashName = env.BUILD_TAG.replace('%2F', '_')

pipeline {
	agent none

	options {
		buildDiscarder(logRotator(numToKeepStr:'10'))
		skipDefaultCheckout()
		timestamps()
	}

    stages {
        stage('Version') {
            agent {
                label 'PlatformSoftware'
            }
            steps {
              checkout scm

                script {
                    packageVersion = sh(script: """cat ./package.json \
| grep version \
| head -1 \
| awk -F: '{ print \$2 }' \
| sed 's/[",]//g' \
| tr -d '[[:space:]]'""", returnStdout: true).trim()

                    // If this is executing on develop (preReleaseBuild is true)
                    // then check to see if the commit message is telling us to publish.
                    if (preReleaseBuild) {
                      publishPackage = sh (script: "git log -1 | grep -E 'Pre\\-release [0-9]+\\.[0-9]+\\.[0-9]+\\-[0-9]+'", returnStatus: true)
                      publishPackage = "${publishPackage}" == "0"
                    } else if (isMaster) {
                      publishPackage = sh (script: "git log -1 | grep -E 'Release [0-9]+\\.[0-9]+\\.[0-9]+'", returnStatus: true)
                      publishPackage = "${publishPackage}" == "0"
                    }

                    echo "Current package.json version: ${packageVersion}"

                    if (packageVersion.indexOf('-') >= 0) {
                      // pre-release
                      relVersion = packageVersion

                      buildType = 'prerelease'
                      cmSemVer = "${relVersion}"
                      cmBuildTag = "build/${buildName}/${relVersion}"
                    } else {
                      // Create some number of global version strings here.
                      relVersion = packageVersion.tokenize('.')[0..2].each{ String.format('%d', it.toInteger()) }.join('.')
                      buildType = ciBuild ? 'ci' : 'integration'

                      cmSemVer = ciBuild ? "${relVersion}-${buildType}.${BUILD_NUMBER}" : "${relVersion}"
                      cmBuildTag = "build/${buildName}/${relVersion}.${BUILD_NUMBER}"
                    }

                    cmBuildNumber = "${relVersion}.${BUILD_NUMBER}"
                    cmReleaseTag = "v${relVersion}"

                     stepEnvironment = [
                        "CM_BUILD_NUMBER=${cmBuildNumber}",
                        "REL_VERSION=${relVersion}"
                    ]

                                    echo """
Build Information
----------------------------------
Build type:       ${buildType}
Release version:  ${relVersion}
Build version:    ${cmBuildNumber}
Semantic Version: ${cmSemVer}
Build tag:        ${cmBuildTag}
----------------------------------
"""
                }
            }
        }

        // stage('Build and Test') {
            // parallel {
                /*
                 * The build stage will do the following:
                 * 1. Restore Project Dependencies
                 * 2. Build
                 * 3. Prep files for "publish", the creation of the docker image
                 */
                stage('Build') {
                    agent {
                        label 'PlatformSoftware'
                    }
                    steps {
                        // GET SOURCE!!!
                        checkout scm

                        script {
                            sh '''#!/bin/bash -l
                            nvm install 10.13.0
                            '''

                            cmSemVer = "${relVersion}-${buildType}.${BUILD_NUMBER}"

                            withEnv(stepEnvironment + [
                                "CM_SEM_VER=${cmSemVer}"
                            ]) {
                              sh '''#!/bin/bash -l
                                  nvm use 10.13.0
                                  make dist
                                  '''
                            }
                        }

                        script {
                            if (!ciBuild || preReleaseBuild) {
                                echo "Skipping stash until publish - there was also an issue here :("
                                stash allowEmpty: false, name: stashName, includes: "dist/**"
                            }
                        }
                    }
                }

                stage('Test') {
                    agent {
                        label 'PlatformSoftware'
                    }
                    steps {
                        // GET SOURCE!!!
                        checkout scm

                        script {
                            cmSemVer = "${relVersion}-${buildType}.${BUILD_NUMBER}"

                            withEnv(stepEnvironment + [
                                "CM_SEM_VER=${cmSemVer}"
                            ]) {
                              sh '''#!/bin/bash -l
                                  nvm use 10.13.0
                                  make test
                                  '''
                            }
                        }

                        // publish html
                        publishHTML target: [
                          allowMissing: true,
                          alwaysLinkToLastBuild: false,
                          keepAll: true,
                          reportDir: 'coverage-lib',
                          reportFiles: 'index.html',
                          reportName: 'Library Code Coverage'
                        ]

                        // publish html
                        publishHTML target: [
                          allowMissing: true,
                          alwaysLinkToLastBuild: false,
                          keepAll: true,
                          reportDir: 'coverage-app',
                          reportFiles: 'index.html',
                          reportName: 'Test App Code Coverage'
                        ]
                    }
                }
            // }
        // }

        // stage('Publish - Pre-Release') {
        //     agent {
        //         label 'PlatformSoftware'
        //     }
        //     when {
        //         beforeAgent true
        //         expression { return preReleaseBuild }
        //     }
        //     steps {
        //       echo "Doing pre-release steps for 'develop' branch."

        //       unstash name: stashName

        //       sh '''#!/bin/bash -l
        //         ls -lash
        //         '''

        //       echo "Not doing any publishing yet!"
        //     }
        // }

        stage('Publish') {
            agent {
                label 'PlatformSoftware'
            }
            when {
                beforeAgent true
                expression { return (isMaster || preReleaseBuild) && publishPackage }
            }
            steps {
                unstash name: stashName

                withEnv(stepEnvironment + [
                    "CM_SEM_VER=${cmSemVer}"
                ]) {
                  sh '''#!/bin/bash -l
                    cd dist/cut
                    npm version $REL_VERSION
                    npm publish --registry https://cbdatascience.jfrog.io/cbdatascience/api/npm/cb-node-local/
                    '''
                }
            }
        }
    }

    post {
		failure {
			emailext(
				attachLog: true,
				body: 'See ${BUILD_URL} or the attached logs for more details.',
				compressLog: true,
				recipientProviders: [[$class: 'CulpritsRecipientProvider']],
				replyTo: 'no-reply@careerbuilder.com',
				subject: 'Jenkins: ${JOB_NAME} ${BUILD_DISPLAY_NAME} failed!',
				to: 'cc:Mason.Beard@careerbuilder.com'
			)
		}
	}
}
