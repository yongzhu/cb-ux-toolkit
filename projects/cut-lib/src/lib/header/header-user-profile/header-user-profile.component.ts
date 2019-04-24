import { DOCUMENT } from "@angular/common";
import { Component, ElementRef, Inject, OnInit, Renderer } from "@angular/core";
import { BackgroundTheme, BgThemeEnum } from "../../theme/theme.class";
import { CutHeaderService } from "../header.service";

@Component({
  selector: "cut-header-user-profile",
  templateUrl: "./header-user-profile.component.html",
  styleUrls: ["./header-user-profile.component.scss"]
})
export class CutHeaderUserProfileComponent implements OnInit {

  headerObj: any;
  selectedTheme: any = BackgroundTheme;
  defaultColorMsg: string;
  themeChosen: number;

  constructor(private headerService: CutHeaderService,
    @Inject(DOCUMENT) private document: any) {
  }

  ngOnInit() {
    this.headerService.headerObservable.subscribe(headerObj => {
      this.headerObj = headerObj;
      let selectedColor = "Light";

      if (this.headerObj.userProfile) {
        const headerBgColor = this.headerObj.userProfile.user.bgColor;

        switch (headerBgColor) {
          case this.selectedTheme[BgThemeEnum.Lightest].rgb:
            selectedColor = "Lightest";
            break;
          case this.selectedTheme[BgThemeEnum.Light].rgb:
            selectedColor = "Light";
            break;
          case this.selectedTheme[BgThemeEnum.Dark].rgb:
            selectedColor = "Dark";
            break;
        }
      }

      this.defaultColorMsg = this.selectedTheme[(BgThemeEnum as { [key: string]: any })[selectedColor]].msg;
      this.themeChosen = (BgThemeEnum as { [key: string]: any })[selectedColor];
    });

    this.selectTheme(1);
  }

  emitActionType(action: string, element?: string, payload?: any) {
    let subItem;
    if (!element) {
      subItem = "";
    } else {
      subItem = ":" + element;
    }
    this.headerService.emitActionType(action, "userProfile", payload);
  }

  showAsActive(item: any) {
    return this.headerService.showAsActive(item);
  }

  getTargetAttribute(newWindow: boolean) {
    return this.headerService.getTargetAttribute(newWindow);
  }

  selectTheme(theme: number) {
    // This was some weird solution for selecting background color - i don't think it's even working on tdp atm.  killing it for now - JP
    // this.document.body.style.background = this.selectedTheme[theme].bg;
    this.defaultColorMsg = this.selectedTheme[theme].msg;
    this.themeChosen = theme;
    this.emitActionType("BACKGROUND_COLOR_ACTION", "userProfile", this.selectedTheme[theme].rgb);
  }
}
