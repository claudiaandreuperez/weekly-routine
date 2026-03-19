import {
  DAY_NAMES_SHORT,
  DbService,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  WeekService,
  formatWeekRange
} from "./chunk-2T5OFTXK.js";
import {
  CommonModule,
  Component,
  __async,
  __objRest,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-J2AZKKVH.js";

// src/app/features/templates/components/template-list/template-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.idx;
function TemplateListComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "p");
    \u0275\u0275text(2, "No tienes plantillas guardadas");
    \u0275\u0275elementEnd()();
  }
}
function TemplateListComponent_Conditional_19_For_2_For_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r2.dayNames[day_r2.idx], ": ", day_r2.count);
  }
}
function TemplateListComponent_Conditional_19_For_2_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, TemplateListComponent_Conditional_19_For_2_For_8_Conditional_0_Template, 2, 2, "span", 22);
  }
  if (rf & 2) {
    const day_r2 = ctx.$implicit;
    \u0275\u0275conditional(day_r2.count > 0 ? 0 : -1);
  }
}
function TemplateListComponent_Conditional_19_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 11)(1, "div", 12)(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 15);
    \u0275\u0275repeaterCreate(7, TemplateListComponent_Conditional_19_For_2_For_8_Template, 1, 1, null, null, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 16)(10, "button", 17);
    \u0275\u0275listener("click", function TemplateListComponent_Conditional_19_For_2_Template_button_click_10_listener() {
      const tpl_r4 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.applyTemplate(tpl_r4));
    });
    \u0275\u0275text(11, "Aplicar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 18);
    \u0275\u0275listener("click", function TemplateListComponent_Conditional_19_For_2_Template_button_click_12_listener() {
      const tpl_r4 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteTemplate(tpl_r4.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 19);
    \u0275\u0275element(14, "polyline", 20)(15, "path", 21);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const tpl_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tpl_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", tpl_r4.tasks.length, " tareas");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.getDayDistribution(tpl_r4));
  }
}
function TemplateListComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 9);
    \u0275\u0275repeaterCreate(1, TemplateListComponent_Conditional_19_For_2_Template, 16, 2, "li", 11, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.templates());
  }
}
function TemplateListComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("error", ctx_r2.isError());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.message(), " ");
  }
}
var TemplateListComponent = class _TemplateListComponent {
  db;
  week;
  templates = signal([], ...ngDevMode ? [{ debugName: "templates" }] : []);
  message = signal("", ...ngDevMode ? [{ debugName: "message" }] : []);
  isError = signal(false, ...ngDevMode ? [{ debugName: "isError" }] : []);
  dayNames = DAY_NAMES_SHORT;
  newTemplateName = "";
  constructor(db, week) {
    this.db = db;
    this.week = week;
  }
  get currentWeekRange() {
    return formatWeekRange(this.week.mondayDate());
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.week.loadWeek();
      yield this.loadTemplates();
    });
  }
  loadTemplates() {
    return __async(this, null, function* () {
      this.templates.set(yield this.db.getAllTemplates());
    });
  }
  saveCurrentWeek() {
    return __async(this, null, function* () {
      const tasks = this.week.tasks();
      if (tasks.length === 0) {
        this.showMessage("No hay tareas esta semana para guardar", true);
        return;
      }
      const template = {
        id: crypto.randomUUID(),
        name: this.newTemplateName.trim(),
        tasks: tasks.map((_a) => {
          var _b = _a, { id, weekStartDate, completed } = _b, rest = __objRest(_b, ["id", "weekStartDate", "completed"]);
          return rest;
        })
      };
      yield this.db.addTemplate(template);
      this.newTemplateName = "";
      yield this.loadTemplates();
      this.showMessage("Plantilla guardada correctamente");
    });
  }
  applyTemplate(tpl) {
    return __async(this, null, function* () {
      yield this.db.applyTemplate(tpl, this.week.weekStartDate());
      yield this.week.loadWeek();
      this.showMessage(`Plantilla "${tpl.name}" aplicada`);
    });
  }
  deleteTemplate(id) {
    return __async(this, null, function* () {
      yield this.db.deleteTemplate(id);
      yield this.loadTemplates();
      this.showMessage("Plantilla eliminada");
    });
  }
  getDayDistribution(tpl) {
    const counts = new Array(7).fill(0);
    tpl.tasks.forEach((t) => counts[t.dayOfWeek]++);
    return counts.map((count, idx) => ({ idx, count }));
  }
  showMessage(msg, error = false) {
    this.message.set(msg);
    this.isError.set(error);
    setTimeout(() => this.message.set(""), 3e3);
  }
  static \u0275fac = function TemplateListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TemplateListComponent)(\u0275\u0275directiveInject(DbService), \u0275\u0275directiveInject(WeekService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TemplateListComponent, selectors: [["app-template-list"]], decls: 21, vars: 5, consts: [[1, "templates-page"], [1, "header"], [1, "subtitle"], [1, "section"], [1, "hint"], [1, "save-row"], ["type", "text", "placeholder", "Nombre de la plantilla", 1, "input", 3, "ngModelChange", "ngModel"], [1, "btn-save", 3, "click", "disabled"], [1, "empty"], [1, "template-list"], [1, "toast", 3, "error"], [1, "template-card"], [1, "tpl-info"], [1, "tpl-name"], [1, "tpl-count"], [1, "tpl-days"], [1, "tpl-actions"], [1, "btn-apply", 3, "click"], [1, "btn-delete", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"], [1, "day-badge"], [1, "toast"]], template: function TemplateListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1");
      \u0275\u0275text(3, "Plantillas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Guarda y reutiliza tus semanas");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "section", 3)(7, "h2");
      \u0275\u0275text(8, "Guardar semana actual");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 4);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 5)(12, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function TemplateListComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.newTemplateName, $event) || (ctx.newTemplateName = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function TemplateListComponent_Template_button_click_13_listener() {
        return ctx.saveCurrentWeek();
      });
      \u0275\u0275text(14, " Guardar ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "section", 3)(16, "h2");
      \u0275\u0275text(17, "Mis plantillas");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(18, TemplateListComponent_Conditional_18_Template, 3, 0, "div", 8)(19, TemplateListComponent_Conditional_19_Template, 3, 0, "ul", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(20, TemplateListComponent_Conditional_20_Template, 2, 3, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("Guarda la semana ", ctx.currentWeekRange, " como plantilla");
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.newTemplateName);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.newTemplateName.trim());
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.templates().length === 0 ? 18 : 19);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.message() ? 20 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.templates-page[_ngcontent-%COMP%] {\n  padding: 16px;\n  padding-top: calc(var(--safe-top) + 16px);\n}\n.header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n}\n.header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  margin-top: 2px;\n}\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.hint[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin-bottom: 10px;\n}\n.save-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: var(--bg-surface);\n  font-size: 14px;\n  outline: none;\n}\n.input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.btn-save[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  background: var(--primary);\n  color: white;\n  border-radius: var(--radius-sm);\n  font-weight: 600;\n  font-size: 14px;\n  white-space: nowrap;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.template-list[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.template-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  padding: 14px;\n  border-radius: var(--radius);\n  box-shadow: var(--shadow-sm);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n.tpl-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.tpl-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  display: block;\n}\n.tpl-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.tpl-days[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin-top: 6px;\n}\n.day-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 2px 6px;\n  background: var(--bg-surface);\n  border-radius: var(--radius-full);\n  color: var(--text-secondary);\n}\n.tpl-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.btn-apply[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: color-mix(in srgb, var(--primary) 12%, transparent);\n  color: var(--primary);\n  border-radius: var(--radius-sm);\n  font-weight: 600;\n  font-size: 13px;\n}\n.btn-delete[_ngcontent-%COMP%] {\n  min-width: 40px;\n  min-height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.btn-delete[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.btn-delete[_ngcontent-%COMP%]:active {\n  color: var(--danger);\n}\n.toast[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: calc(var(--nav-height) + var(--safe-bottom) + 16px);\n  left: 16px;\n  right: 16px;\n  padding: 14px 16px;\n  background: var(--success);\n  color: white;\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-weight: 500;\n  text-align: center;\n  z-index: 150;\n  animation: _ngcontent-%COMP%_slideUp 0.3s ease;\n}\n.toast.error[_ngcontent-%COMP%] {\n  background: var(--danger);\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=template-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplateListComponent, [{
    type: Component,
    args: [{ selector: "app-template-list", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="templates-page">
      <header class="header">
        <h1>Plantillas</h1>
        <p class="subtitle">Guarda y reutiliza tus semanas</p>
      </header>

      <section class="section">
        <h2>Guardar semana actual</h2>
        <p class="hint">Guarda la semana {{ currentWeekRange }} como plantilla</p>
        <div class="save-row">
          <input
            type="text"
            [(ngModel)]="newTemplateName"
            placeholder="Nombre de la plantilla"
            class="input"
          />
          <button
            class="btn-save"
            (click)="saveCurrentWeek()"
            [disabled]="!newTemplateName.trim()"
          >
            Guardar
          </button>
        </div>
      </section>

      <section class="section">
        <h2>Mis plantillas</h2>
        @if (templates().length === 0) {
          <div class="empty">
            <p>No tienes plantillas guardadas</p>
          </div>
        } @else {
          <ul class="template-list">
            @for (tpl of templates(); track tpl.id) {
              <li class="template-card">
                <div class="tpl-info">
                  <span class="tpl-name">{{ tpl.name }}</span>
                  <span class="tpl-count">{{ tpl.tasks.length }} tareas</span>
                  <div class="tpl-days">
                    @for (day of getDayDistribution(tpl); track day.idx) {
                      @if (day.count > 0) {
                        <span class="day-badge">{{ dayNames[day.idx] }}: {{ day.count }}</span>
                      }
                    }
                  </div>
                </div>
                <div class="tpl-actions">
                  <button class="btn-apply" (click)="applyTemplate(tpl)">Aplicar</button>
                  <button class="btn-delete" (click)="deleteTemplate(tpl.id)">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </button>
                </div>
              </li>
            }
          </ul>
        }
      </section>

      @if (message()) {
        <div class="toast" [class.error]="isError()">
          {{ message() }}
        </div>
      }
    </div>
  `, styles: ["/* angular:styles/component:scss;d6d08948a19a0419c5767f35722ce88f3dcb51376b710c48e1a61bda86aed31b;/home/claudia.andreu/weekly-routine/src/app/features/templates/components/template-list/template-list.component.ts */\n.templates-page {\n  padding: 16px;\n  padding-top: calc(var(--safe-top) + 16px);\n}\n.header {\n  margin-bottom: 24px;\n}\n.header h1 {\n  font-size: 28px;\n  font-weight: 700;\n}\n.header .subtitle {\n  font-size: 14px;\n  color: var(--text-secondary);\n  margin-top: 2px;\n}\n.section {\n  margin-bottom: 28px;\n}\n.section h2 {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.hint {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin-bottom: 10px;\n}\n.save-row {\n  display: flex;\n  gap: 10px;\n}\n.input {\n  flex: 1;\n  padding: 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: var(--bg-surface);\n  font-size: 14px;\n  outline: none;\n}\n.input:focus {\n  border-color: var(--primary);\n}\n.btn-save {\n  padding: 12px 20px;\n  background: var(--primary);\n  color: white;\n  border-radius: var(--radius-sm);\n  font-weight: 600;\n  font-size: 14px;\n  white-space: nowrap;\n}\n.btn-save:disabled {\n  opacity: 0.5;\n}\n.empty {\n  text-align: center;\n  padding: 32px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.template-list {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.template-card {\n  background: var(--bg-card);\n  padding: 14px;\n  border-radius: var(--radius);\n  box-shadow: var(--shadow-sm);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n.tpl-info {\n  flex: 1;\n  min-width: 0;\n}\n.tpl-name {\n  font-size: 15px;\n  font-weight: 600;\n  display: block;\n}\n.tpl-count {\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.tpl-days {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin-top: 6px;\n}\n.day-badge {\n  font-size: 11px;\n  padding: 2px 6px;\n  background: var(--bg-surface);\n  border-radius: var(--radius-full);\n  color: var(--text-secondary);\n}\n.tpl-actions {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.btn-apply {\n  padding: 8px 16px;\n  background: color-mix(in srgb, var(--primary) 12%, transparent);\n  color: var(--primary);\n  border-radius: var(--radius-sm);\n  font-weight: 600;\n  font-size: 13px;\n}\n.btn-delete {\n  min-width: 40px;\n  min-height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.btn-delete svg {\n  width: 18px;\n  height: 18px;\n}\n.btn-delete:active {\n  color: var(--danger);\n}\n.toast {\n  position: fixed;\n  bottom: calc(var(--nav-height) + var(--safe-bottom) + 16px);\n  left: 16px;\n  right: 16px;\n  padding: 14px 16px;\n  background: var(--success);\n  color: white;\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-weight: 500;\n  text-align: center;\n  z-index: 150;\n  animation: slideUp 0.3s ease;\n}\n.toast.error {\n  background: var(--danger);\n}\n@keyframes slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=template-list.component.css.map */\n"] }]
  }], () => [{ type: DbService }, { type: WeekService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TemplateListComponent, { className: "TemplateListComponent", filePath: "src/app/features/templates/components/template-list/template-list.component.ts", lineNumber: 274 });
})();
export {
  TemplateListComponent
};
//# sourceMappingURL=chunk-Z3L3JRJV.js.map
