###### Universal Definitions ########
# Determine the location of this Makefile, and from that guess at the
# WORKSPACE; WORKSPACE will be overridden by Jenkins at build time.
__main_makefile_path := $(abspath $(lastword $(MAKEFILE_LIST)))
main__makefileDir := $(dir $(__main_makefile_path))
WORKSPACE ?= $(abspath $(main__makefileDir))

# Mandatory variables used in the construction of output paths, Docker tags,
# etc.
PRODUCT ?= cb-ux-toolkit
BUILD_NAME ?= cut

.DEFAULT_GOAL := build

.PHONY: $(PHONY_TARGETS)

# Our targets. Use library targets as prerequisites.
clean: npm-clean

build: restore-dependencies npm-build

test: npm-test

dist: build

restore-dependencies:
	@npm install

npm-clean:
	@npm run clean

npm-build: restore-dependencies
	@npm run build

npm-test: npm-build
	@npm run test-lib

