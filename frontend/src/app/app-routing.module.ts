import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { PartyComponent } from "./party/party.component"
import { PartyCreationComponent } from "./party-creation/party-creation.component"

const routes: Routes = [
  {
    path: "",
    component: PartyCreationComponent,
  },
  {
    path: "party",
    component: PartyComponent,
  },
  {
    path: "party/:partyId",
    component: PartyComponent,
  },
  {
    path: "**",
    redirectTo: "/",
    pathMatch: "full",
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
