import {
  CATEGORIES,
  CheckboxControlValueAccessor,
  DAY_NAMES,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-2T5OFTXK.js";
import {
  CommonModule,
  Component,
  Input,
  Output,
  Pipe,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
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
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-J2AZKKVH.js";

// src/app/shared/components/ui/fab-button/fab-button.component.ts
var FabButtonComponent = class _FabButtonComponent {
  fabClick = output();
  static \u0275fac = function FabButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FabButtonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FabButtonComponent, selectors: [["app-fab-button"]], outputs: { fabClick: "fabClick" }, decls: 4, vars: 0, consts: [["aria-label", "A\xF1adir tarea", 1, "fab", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"]], template: function FabButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "button", 0);
      \u0275\u0275domListener("click", function FabButtonComponent_Template_button_click_0_listener() {
        return ctx.fabClick.emit();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(1, "svg", 1);
      \u0275\u0275domElement(2, "line", 2)(3, "line", 3);
      \u0275\u0275domElementEnd()();
    }
  }, styles: ["\n\n.fab[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: calc(var(--nav-height) + var(--safe-bottom) + 16px);\n  right: 16px;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: var(--primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: var(--shadow-lg);\n  z-index: 90;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.fab[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.fab[_ngcontent-%COMP%]:active {\n  transform: scale(0.92);\n}\n/*# sourceMappingURL=fab-button.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FabButtonComponent, [{
    type: Component,
    args: [{ selector: "app-fab-button", standalone: true, template: `
    <button class="fab" (click)="fabClick.emit()" aria-label="A\xF1adir tarea">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </button>
  `, styles: ["/* angular:styles/component:scss;d95989fa1e8ca8a75df165b64c6459aed5185bfd38620ccbbed6e071ed3987f8;/home/claudia.andreu/weekly-routine/src/app/shared/components/ui/fab-button/fab-button.component.ts */\n.fab {\n  position: fixed;\n  bottom: calc(var(--nav-height) + var(--safe-bottom) + 16px);\n  right: 16px;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: var(--primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: var(--shadow-lg);\n  z-index: 90;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.fab svg {\n  width: 24px;\n  height: 24px;\n}\n.fab:active {\n  transform: scale(0.92);\n}\n/*# sourceMappingURL=fab-button.component.css.map */\n"] }]
  }], null, { fabClick: [{ type: Output, args: ["fabClick"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FabButtonComponent, { className: "FabButtonComponent", filePath: "src/app/shared/components/ui/fab-button/fab-button.component.ts", lineNumber: 42 });
})();

// src/app/shared/components/forms/task-form/task-form.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function TaskFormComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    \u0275\u0275property("ngValue", $index_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(day_r1);
  }
}
function TaskFormComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function TaskFormComponent_For_25_Template_button_click_0_listener() {
      const cat_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      ctx_r4.category = cat_r4.name;
      return \u0275\u0275resetView(ctx_r4.color = cat_r4.color);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--cat-color", cat_r4.color);
    \u0275\u0275classProp("selected", ctx_r4.category === cat_r4.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r4.name, " ");
  }
}
var TaskFormComponent = class _TaskFormComponent {
  visible = input(false, ...ngDevMode ? [{ debugName: "visible" }] : []);
  editTask = input(null, ...ngDevMode ? [{ debugName: "editTask" }] : []);
  defaultDay = input(0, ...ngDevMode ? [{ debugName: "defaultDay" }] : []);
  close = output();
  saveTask = output();
  categories = CATEGORIES;
  dayNames = DAY_NAMES;
  title = "";
  description = "";
  dayOfWeek = 0;
  time = "";
  category = CATEGORIES[0].name;
  color = CATEGORIES[0].color;
  isRecurring = false;
  reminder = false;
  ngOnInit() {
    this.resetForm();
  }
  resetForm() {
    const task = this.editTask();
    if (task) {
      this.title = task.title;
      this.description = task.description ?? "";
      this.dayOfWeek = task.dayOfWeek;
      this.time = task.time ?? "";
      this.category = task.category;
      this.color = task.color;
      this.isRecurring = task.isRecurring;
      this.reminder = task.reminder ?? false;
    } else {
      this.dayOfWeek = this.defaultDay();
    }
  }
  save() {
    if (!this.title.trim())
      return;
    this.saveTask.emit({
      title: this.title.trim(),
      description: this.description.trim() || void 0,
      dayOfWeek: this.dayOfWeek,
      time: this.time || void 0,
      category: this.category,
      color: this.color,
      isRecurring: this.isRecurring,
      reminder: this.reminder
    });
    this.title = "";
    this.description = "";
    this.time = "";
    this.isRecurring = false;
    this.reminder = false;
  }
  static \u0275fac = function TaskFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaskFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaskFormComponent, selectors: [["app-task-form"]], inputs: { visible: [1, "visible"], editTask: [1, "editTask"], defaultDay: [1, "defaultDay"] }, outputs: { close: "close", saveTask: "saveTask" }, decls: 41, vars: 13, consts: [[1, "overlay", 3, "click"], [1, "sheet"], [1, "handle"], [1, "form-group"], ["type", "text", "placeholder", "\xBFQu\xE9 tienes que hacer?", "autofocus", "", 1, "input-title", 3, "ngModelChange", "ngModel"], ["placeholder", "Descripci\xF3n (opcional)", "rows", "2", 1, "input-desc", 3, "ngModelChange", "ngModel"], [1, "form-row"], [1, "form-group", "half"], [3, "ngModelChange", "ngModel"], [3, "ngValue"], ["type", "time", 3, "ngModelChange", "ngModel"], [1, "category-grid"], [1, "cat-chip", 3, "selected", "--cat-color"], [1, "toggle-row"], ["type", "checkbox", 1, "toggle", 3, "ngModelChange", "ngModel"], [1, "actions"], [1, "btn-cancel", 3, "click"], [1, "btn-save", 3, "click", "disabled"], [1, "cat-chip", 3, "click"]], template: function TaskFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function TaskFormComponent_Template_div_click_0_listener() {
        return ctx.close.emit();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275element(2, "div", 2);
      \u0275\u0275elementStart(3, "h2");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3)(6, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function TaskFormComponent_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.title, $event) || (ctx.title = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 3)(8, "textarea", 5);
      \u0275\u0275twoWayListener("ngModelChange", function TaskFormComponent_Template_textarea_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.description, $event) || (ctx.description = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "label");
      \u0275\u0275text(12, "D\xEDa");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function TaskFormComponent_Template_select_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.dayOfWeek, $event) || (ctx.dayOfWeek = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(14, TaskFormComponent_For_15_Template, 2, 2, "option", 9, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 7)(17, "label");
      \u0275\u0275text(18, "Hora (opcional)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function TaskFormComponent_Template_input_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.time, $event) || (ctx.time = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 3)(21, "label");
      \u0275\u0275text(22, "Categor\xEDa");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 11);
      \u0275\u0275repeaterCreate(24, TaskFormComponent_For_25_Template, 2, 5, "button", 12, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 3)(27, "label", 13)(28, "span");
      \u0275\u0275text(29, "Repetir cada semana");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function TaskFormComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.isRecurring, $event) || (ctx.isRecurring = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 3)(32, "label", 13)(33, "span");
      \u0275\u0275text(34, "Recordatorio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function TaskFormComponent_Template_input_ngModelChange_35_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.reminder, $event) || (ctx.reminder = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 15)(37, "button", 16);
      \u0275\u0275listener("click", function TaskFormComponent_Template_button_click_37_listener() {
        return ctx.close.emit();
      });
      \u0275\u0275text(38, "Cancelar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "button", 17);
      \u0275\u0275listener("click", function TaskFormComponent_Template_button_click_39_listener() {
        return ctx.save();
      });
      \u0275\u0275text(40);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("visible", ctx.visible());
      \u0275\u0275advance();
      \u0275\u0275classProp("visible", ctx.visible());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.editTask() ? "Editar tarea" : "Nueva tarea");
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.title);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.description);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.dayOfWeek);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.dayNames);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.time);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.categories);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.isRecurring);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.reminder);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", !ctx.title.trim());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.editTask() ? "Guardar" : "A\xF1adir", " ");
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 200;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.3s;\n}\n.overlay.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n}\n.sheet[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: var(--bg-card);\n  border-radius: 20px 20px 0 0;\n  padding: 12px 20px calc(var(--safe-bottom) + 20px);\n  z-index: 201;\n  transform: translateY(100%);\n  transition: transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);\n  max-height: 90dvh;\n  overflow-y: auto;\n}\n.sheet.visible[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n.handle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 4px;\n  background: var(--border);\n  border-radius: 2px;\n  margin: 0 auto 16px;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.half[_ngcontent-%COMP%] {\n  flex: 1;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 6px;\n}\n.input-title[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 16px;\n  background: var(--bg-surface);\n  outline: none;\n}\n.input-title[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.input-desc[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  background: var(--bg-surface);\n  resize: none;\n  outline: none;\n}\n.input-desc[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\nselect[_ngcontent-%COMP%], \ninput[type=time][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: var(--bg-surface);\n  font-size: 14px;\n  outline: none;\n}\nselect[_ngcontent-%COMP%]:focus, \ninput[type=time][_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.category-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.cat-chip[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: var(--radius-full);\n  font-size: 13px;\n  font-weight: 500;\n  border: 2px solid var(--border);\n  transition: all 0.2s;\n}\n.cat-chip.selected[_ngcontent-%COMP%] {\n  border-color: var(--cat-color);\n  background: color-mix(in srgb, var(--cat-color) 15%, transparent);\n  color: var(--cat-color);\n}\n.toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--text);\n}\n.toggle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 24px;\n  appearance: none;\n  background: var(--border);\n  border-radius: 12px;\n  position: relative;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.toggle[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 20px;\n  height: 20px;\n  background: white;\n  border-radius: 50%;\n  transition: transform 0.2s;\n  box-shadow: var(--shadow-sm);\n}\n.toggle[_ngcontent-%COMP%]:checked {\n  background: var(--primary);\n}\n.toggle[_ngcontent-%COMP%]:checked::after {\n  transform: translateX(20px);\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 20px;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 14px;\n  border-radius: var(--radius-sm);\n  font-weight: 600;\n  font-size: 15px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n}\n.btn-save[_ngcontent-%COMP%] {\n  flex: 2;\n  padding: 14px;\n  border-radius: var(--radius-sm);\n  font-weight: 600;\n  font-size: 15px;\n  background: var(--primary);\n  color: white;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.btn-save[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.98);\n}\n/*# sourceMappingURL=task-form.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskFormComponent, [{
    type: Component,
    args: [{ selector: "app-task-form", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="overlay" (click)="close.emit()" [class.visible]="visible()"></div>
    <div class="sheet" [class.visible]="visible()">
      <div class="handle"></div>
      <h2>{{ editTask() ? 'Editar tarea' : 'Nueva tarea' }}</h2>

      <div class="form-group">
        <input
          type="text"
          [(ngModel)]="title"
          placeholder="\xBFQu\xE9 tienes que hacer?"
          class="input-title"
          autofocus
        />
      </div>

      <div class="form-group">
        <textarea
          [(ngModel)]="description"
          placeholder="Descripci\xF3n (opcional)"
          rows="2"
          class="input-desc"
        ></textarea>
      </div>

      <div class="form-row">
        <div class="form-group half">
          <label>D\xEDa</label>
          <select [(ngModel)]="dayOfWeek">
            @for (day of dayNames; track $index) {
              <option [ngValue]="$index">{{ day }}</option>
            }
          </select>
        </div>
        <div class="form-group half">
          <label>Hora (opcional)</label>
          <input type="time" [(ngModel)]="time" />
        </div>
      </div>

      <div class="form-group">
        <label>Categor\xEDa</label>
        <div class="category-grid">
          @for (cat of categories; track cat.name) {
            <button
              class="cat-chip"
              [class.selected]="category === cat.name"
              [style.--cat-color]="cat.color"
              (click)="category = cat.name; color = cat.color"
            >
              {{ cat.name }}
            </button>
          }
        </div>
      </div>

      <div class="form-group">
        <label class="toggle-row">
          <span>Repetir cada semana</span>
          <input type="checkbox" [(ngModel)]="isRecurring" class="toggle" />
        </label>
      </div>

      <div class="form-group">
        <label class="toggle-row">
          <span>Recordatorio</span>
          <input type="checkbox" [(ngModel)]="reminder" class="toggle" />
        </label>
      </div>

      <div class="actions">
        <button class="btn-cancel" (click)="close.emit()">Cancelar</button>
        <button class="btn-save" (click)="save()" [disabled]="!title.trim()">
          {{ editTask() ? 'Guardar' : 'A\xF1adir' }}
        </button>
      </div>
    </div>
  `, styles: ['/* angular:styles/component:scss;b0769ab1e02fc1ed8a5d2f733b8914687ddb44f153ecb1a34ee256d63bb6c53e;/home/claudia.andreu/weekly-routine/src/app/shared/components/forms/task-form/task-form.component.ts */\n.overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 200;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.3s;\n}\n.overlay.visible {\n  opacity: 1;\n  pointer-events: auto;\n}\n.sheet {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: var(--bg-card);\n  border-radius: 20px 20px 0 0;\n  padding: 12px 20px calc(var(--safe-bottom) + 20px);\n  z-index: 201;\n  transform: translateY(100%);\n  transition: transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);\n  max-height: 90dvh;\n  overflow-y: auto;\n}\n.sheet.visible {\n  transform: translateY(0);\n}\n.handle {\n  width: 36px;\n  height: 4px;\n  background: var(--border);\n  border-radius: 2px;\n  margin: 0 auto 16px;\n}\nh2 {\n  font-size: 18px;\n  margin-bottom: 16px;\n}\n.form-group {\n  margin-bottom: 14px;\n}\n.form-row {\n  display: flex;\n  gap: 12px;\n}\n.half {\n  flex: 1;\n}\nlabel {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 6px;\n}\n.input-title {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 16px;\n  background: var(--bg-surface);\n  outline: none;\n}\n.input-title:focus {\n  border-color: var(--primary);\n}\n.input-desc {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  background: var(--bg-surface);\n  resize: none;\n  outline: none;\n}\n.input-desc:focus {\n  border-color: var(--primary);\n}\nselect,\ninput[type=time] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: var(--bg-surface);\n  font-size: 14px;\n  outline: none;\n}\nselect:focus,\ninput[type=time]:focus {\n  border-color: var(--primary);\n}\n.category-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.cat-chip {\n  padding: 6px 14px;\n  border-radius: var(--radius-full);\n  font-size: 13px;\n  font-weight: 500;\n  border: 2px solid var(--border);\n  transition: all 0.2s;\n}\n.cat-chip.selected {\n  border-color: var(--cat-color);\n  background: color-mix(in srgb, var(--cat-color) 15%, transparent);\n  color: var(--cat-color);\n}\n.toggle-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--text);\n}\n.toggle {\n  width: 44px;\n  height: 24px;\n  appearance: none;\n  background: var(--border);\n  border-radius: 12px;\n  position: relative;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.toggle::after {\n  content: "";\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 20px;\n  height: 20px;\n  background: white;\n  border-radius: 50%;\n  transition: transform 0.2s;\n  box-shadow: var(--shadow-sm);\n}\n.toggle:checked {\n  background: var(--primary);\n}\n.toggle:checked::after {\n  transform: translateX(20px);\n}\n.actions {\n  display: flex;\n  gap: 12px;\n  margin-top: 20px;\n}\n.btn-cancel {\n  flex: 1;\n  padding: 14px;\n  border-radius: var(--radius-sm);\n  font-weight: 600;\n  font-size: 15px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n}\n.btn-save {\n  flex: 2;\n  padding: 14px;\n  border-radius: var(--radius-sm);\n  font-weight: 600;\n  font-size: 15px;\n  background: var(--primary);\n  color: white;\n}\n.btn-save:disabled {\n  opacity: 0.5;\n}\n.btn-save:active:not(:disabled) {\n  transform: scale(0.98);\n}\n/*# sourceMappingURL=task-form.component.css.map */\n'] }]
  }], null, { visible: [{ type: Input, args: [{ isSignal: true, alias: "visible", required: false }] }], editTask: [{ type: Input, args: [{ isSignal: true, alias: "editTask", required: false }] }], defaultDay: [{ type: Input, args: [{ isSignal: true, alias: "defaultDay", required: false }] }], close: [{ type: Output, args: ["close"] }], saveTask: [{ type: Output, args: ["saveTask"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaskFormComponent, { className: "TaskFormComponent", filePath: "src/app/shared/components/forms/task-form/task-form.component.ts", lineNumber: 298 });
})();

// src/app/shared/pipes/time-format.pipe.ts
var TimeFormatPipe = class _TimeFormatPipe {
  transform(time) {
    if (!time)
      return "";
    const [h, m] = time.split(":");
    return `${h}:${m}`;
  }
  static \u0275fac = function TimeFormatPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimeFormatPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "timeFormat", type: _TimeFormatPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeFormatPipe, [{
    type: Pipe,
    args: [{ name: "timeFormat", standalone: true }]
  }], null, null);
})();

export {
  FabButtonComponent,
  TaskFormComponent,
  TimeFormatPipe
};
//# sourceMappingURL=chunk-UQG3IUPV.js.map
