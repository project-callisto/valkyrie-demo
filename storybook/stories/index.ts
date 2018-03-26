import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/angular";
import bigInt = require("big-integer");
import { FifthStepComponent } from "./../../client/app/fifth-step.component";
import { FirstStepComponent } from "./../../client/app/first-step.component";
import { FourthStepComponent } from "./../../client/app/fourth-step.component";
import { GraphComponent } from "./../../client/app/graph.component";
import { NavComponent } from "./../../client/app/nav.component";
import { SecondStepComponent } from "./../../client/app/second-step.component";
import { SixthStepComponent } from "./../../client/app/sixth-step.component";
import { ThirdStepComponent } from "./../../client/app/third-step.component";

/* tslint:disable */

storiesOf("Valkyrie Demo", module)

  .add("nav", () => ({
    component: NavComponent,
    props: { sectionStep: 3 },
  }))

  .add("first step", () => ({
    component: FirstStepComponent,
    props: { shown: true },
    moduleMetadata: {
      declarations: [
        NavComponent,
      ],
    },
  }))

  .add("second step", () => ({
    component: SecondStepComponent,
    props: { shown: true },
    moduleMetadata: {
      declarations: [
        NavComponent,
      ],
    },
  }))

  .add("third step", () => ({
    component: ThirdStepComponent,
    props: { shown: true },
    moduleMetadata: {
      declarations: [
        NavComponent,
      ],
    },
  }))

  .add("fourth step", () => ({
    component: FourthStepComponent,
    props: { shown: true },
    moduleMetadata: {
      declarations: [
        NavComponent,
      ],
    },
  }))

  .add("fifth step", () => ({
    component: FifthStepComponent,
    props: { shown: true },
    moduleMetadata: {
      declarations: [
        NavComponent,
      ],
    },
  }))

  .add("sixth step", () => ({
    component: SixthStepComponent,
    props: { shown: true },
    moduleMetadata: {
      declarations: [
        NavComponent,
      ],
    },
  }))

  .add("graph", () => ({
    component: GraphComponent,
    props: {
      coords: [
        {
          "x": bigInt("1818434665380007676359554890799410417095842042341340086408891582578268721910569813619141100161473208037330386221870060425125251101144293189703614005770237"),
          "y": bigInt("262108550597937648776688611164507323240")
        },
        {
          "x": bigInt("11344692275121949748361894386279193887898012619349834304710963510243012768711475666489101525413667227450451378687425067218176305958637106351542310498779410"),
          "y": bigInt("162202106739573701233605305694756902612")
        },
        {
          "x": bigInt("2177626060817030848021595109067903701870887754843723757032564411481456745089550556319055072936476412989591706862664002145307423560337755131387718412568009"),
          "y": bigInt("285943140286729705057196083038564480619")
        },
        {
          "x": bigInt("641297874092558561281003567273367400588027904588596469949255005231984077330698803255996540773542782608591474452849397805237215325768542505374995732096585"),
          "y": bigInt("95880622409374321302818829156146367337")
        },
        {
          "x": bigInt("11344692275121949748361894386279193887898012619349834304710963510243012768711475666489101525413667227450451378687425067218176305958637106351542310498779410"),
          "y": bigInt("162202106739573701233605305694756902612")
        },
        {
          "x": bigInt("2177626060817030848021595109067903701870887754843723757032564411481456745089550556319055072936476412989591706862664002145307423560337755131387718412568009"),
          "y": bigInt("285943140286729705057196083038564480619")
        },
        {
          "x": bigInt("641297874092558561281003567273367400588027904588596469949255005231984077330698803255996540773542782608591474452849397805237215325768542505374995732096585"),
          "y": bigInt("95880622409374321302818829156146367337")
        }
      ],
      decryptedData: {
        decryptedRecords: [
          {
            perpId: "cats",
            userName: "rawr",
          },
          {
            perpId: "cats",
            userName: "rawrrawr",
          },
        ],
        slope: "0",
        rid: "262108550597937648776688611164507323240",
        coords: [
          {
            x: bigInt("1818434665380007676359554890799410417095842042341340086408891582578268721910569813619141100161473208037330386221870060425125251101144293189703614005770237"),
            y: bigInt("262108550597937648776688611164507323240"),
          },
          {
            x: bigInt("11344692275121949748361894386279193887898012619349834304710963510243012768711475666489101525413667227450451378687425067218176305958637106351542310498779410"),
            y: bigInt("162202106739573701233605305694756902612"),
          },
        ],
      },
    },
  }))
  ;
