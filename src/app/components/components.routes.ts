import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AccordionItemDemoComponent } from "./accordion-item-demo/accordion-item-demo.component";
import { ButtonDemoComponent } from "./button-demo/button-demo.component";
import { CardDemoComponent } from "./card-demo/card-demo.component";
import { DropBoxDemoComponent } from "./drop-box-demo/drop-box-demo.component";
import { FooterDemoComponent } from "./footer-demo/footer-demo.component";
import { HeaderDemoComponent } from "./header-demo/header-demo.component";
import { InputDemoComponent } from "./input-demo/input-demo.component";
import { LoadingIndicatorDemoComponent } from "./loading-indicator-demo/loading-indicator-demo.component";
import { SelectDemoComponent } from "./select-demo//select-demo.component";

export const routes: Routes = [
  {
    path: "components",
    children: [
      {
        path: "accordion",
        component: AccordionItemDemoComponent,
        data: {
          title: "Components - Accordion",
          linkText: "Accordion",
          routerLink: "/components/accordion"
        }
      },
      {
        path: "buttons",
        component: ButtonDemoComponent,
        data: {
          title: "Components - Buttons",
          linkText: "Buttons",
          routerLink: "/components/buttons"
        }
      },
      {
        path: "cards", component: CardDemoComponent,
        data: {
          title: "Components - Cards",
          linkText: "Cards",
          routerLink: "/components/cards"
        }
      },
      {
        path: "dropbox", component: DropBoxDemoComponent,
        data: {
          title: "Components - Drop-box",
          linkText: "Drop-box",
          routerLink: "/components/dropbox"
        }
      },
      {
        path: "footer", component: FooterDemoComponent,
        data: {
          title: "Components - Footer",
          linkText: "Footer",
          routerLink: "/components/footer"
        }
      },
      {
        path: "header", component: HeaderDemoComponent,
        data: {
          title: "Components - Header",
          linkText: "Header",
          routerLink: "/components/header"
        }
      },
      {
        path: "input", component: InputDemoComponent,
        data: {
          title: "Components - Inputs",
          linkText: "Input",
          routerLink: "/components/input"
        }
      },
      {
        path: "loading-indicator", component: LoadingIndicatorDemoComponent,
        data: {
          title: "Components - Loading Indicator",
          linkText: "Loading Indicator",
          routerLink: "/components/loading-indicator"
        }
      },
      {
        path: "select", component: SelectDemoComponent,
        data: {
          title: "Components - Select",
          linkText: "Select",
          routerLink: "/components/select"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutes {
}