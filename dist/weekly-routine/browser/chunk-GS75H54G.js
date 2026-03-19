import {
  FabButtonComponent,
  TaskFormComponent,
  TimeFormatPipe
} from "./chunk-UQG3IUPV.js";
import {
  DAY_NAMES,
  WeekService
} from "./chunk-2T5OFTXK.js";
import {
  CommonModule,
  Component,
  Injectable,
  Input,
  __async,
  computed,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate3
} from "./chunk-J2AZKKVH.js";

// src/app/shared/components/ui/progress-ring/progress-ring.component.ts
var ProgressRingComponent = class _ProgressRingComponent {
  progress = input(0, ...ngDevMode ? [{ debugName: "progress" }] : []);
  completed = input(0, ...ngDevMode ? [{ debugName: "completed" }] : []);
  total = input(0, ...ngDevMode ? [{ debugName: "total" }] : []);
  size = input(80, ...ngDevMode ? [{ debugName: "size" }] : []);
  radius = 40;
  strokeWidth = 6;
  circumference = 2 * Math.PI * this.radius;
  dashOffset = computed(() => this.circumference * (1 - this.progress()), ...ngDevMode ? [{ debugName: "dashOffset" }] : []);
  static \u0275fac = function ProgressRingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressRingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProgressRingComponent, selectors: [["app-progress-ring"]], inputs: { progress: [1, "progress"], completed: [1, "completed"], total: [1, "total"], size: [1, "size"] }, decls: 11, vars: 12, consts: [[1, "progress-ring"], ["viewBox", "0 0 100 100"], ["cx", "50", "cy", "50", "fill", "none", 1, "bg-ring"], ["cx", "50", "cy", "50", "fill", "none", "stroke-linecap", "round", "transform", "rotate(-90 50 50)", 1, "progress"], [1, "label"], [1, "count"], [1, "separator"], [1, "total"]], template: function ProgressRingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(1, "svg", 1);
      \u0275\u0275domElement(2, "circle", 2)(3, "circle", 3);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(4, "div", 4)(5, "span", 5);
      \u0275\u0275text(6);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "span", 6);
      \u0275\u0275text(8, "/");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "span", 7);
      \u0275\u0275text(10);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("complete", ctx.progress() >= 1);
      \u0275\u0275advance();
      \u0275\u0275attribute("width", ctx.size())("height", ctx.size());
      \u0275\u0275advance();
      \u0275\u0275attribute("r", ctx.radius)("stroke-width", ctx.strokeWidth);
      \u0275\u0275advance();
      \u0275\u0275attribute("r", ctx.radius)("stroke-width", ctx.strokeWidth)("stroke-dasharray", ctx.circumference)("stroke-dashoffset", ctx.dashOffset());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.completed());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.total());
    }
  }, styles: ["\n\n.progress-ring[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\nsvg[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n}\n.bg-ring[_ngcontent-%COMP%] {\n  stroke: var(--border);\n}\n.progress[_ngcontent-%COMP%] {\n  stroke: var(--primary);\n  transition: stroke-dashoffset 0.5s ease;\n}\n.complete[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  stroke: var(--success);\n}\n.label[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: baseline;\n  gap: 1px;\n  font-weight: 700;\n}\n.count[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  color: var(--text);\n}\n.separator[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  color: var(--text-muted);\n}\n.total[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  color: var(--text-secondary);\n}\n/*# sourceMappingURL=progress-ring.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressRingComponent, [{
    type: Component,
    args: [{ selector: "app-progress-ring", standalone: true, template: `
    <div class="progress-ring" [class.complete]="progress() >= 1">
      <svg [attr.width]="size()" [attr.height]="size()" viewBox="0 0 100 100">
        <circle class="bg-ring" cx="50" cy="50" [attr.r]="radius" fill="none" [attr.stroke-width]="strokeWidth" />
        <circle
          class="progress"
          cx="50"
          cy="50"
          [attr.r]="radius"
          fill="none"
          [attr.stroke-width]="strokeWidth"
          [attr.stroke-dasharray]="circumference"
          [attr.stroke-dashoffset]="dashOffset()"
          stroke-linecap="round"
          transform="rotate(-90 50 50)"
        />
      </svg>
      <div class="label">
        <span class="count">{{ completed() }}</span>
        <span class="separator">/</span>
        <span class="total">{{ total() }}</span>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;646a328f8848f33af664b771fe5315fc90c4bef3bd0e61cde7c53b7f0e829af9;/home/claudia.andreu/weekly-routine/src/app/shared/components/ui/progress-ring/progress-ring.component.ts */\n.progress-ring {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\nsvg {\n  transform: scaleX(-1);\n}\n.bg-ring {\n  stroke: var(--border);\n}\n.progress {\n  stroke: var(--primary);\n  transition: stroke-dashoffset 0.5s ease;\n}\n.complete .progress {\n  stroke: var(--success);\n}\n.label {\n  position: absolute;\n  display: flex;\n  align-items: baseline;\n  gap: 1px;\n  font-weight: 700;\n}\n.count {\n  font-size: 1.1em;\n  color: var(--text);\n}\n.separator {\n  font-size: 0.8em;\n  color: var(--text-muted);\n}\n.total {\n  font-size: 0.8em;\n  color: var(--text-secondary);\n}\n/*# sourceMappingURL=progress-ring.component.css.map */\n"] }]
  }], null, { progress: [{ type: Input, args: [{ isSignal: true, alias: "progress", required: false }] }], completed: [{ type: Input, args: [{ isSignal: true, alias: "completed", required: false }] }], total: [{ type: Input, args: [{ isSignal: true, alias: "total", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProgressRingComponent, { className: "ProgressRingComponent", filePath: "src/app/shared/components/ui/progress-ring/progress-ring.component.ts", lineNumber: 79 });
})();

// src/app/features/today/components/pending-alert/pending-alert.component.ts
function PendingAlertComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 1);
    \u0275\u0275domElement(2, "circle", 2)(3, "line", 3)(4, "line", 4);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3("", ctx_r0.pendingCount(), " tarea", ctx_r0.pendingCount() > 1 ? "s" : "", " pendiente", ctx_r0.pendingCount() > 1 ? "s" : "");
  }
}
var PendingAlertComponent = class _PendingAlertComponent {
  pendingCount = input(0, ...ngDevMode ? [{ debugName: "pendingCount" }] : []);
  static \u0275fac = function PendingAlertComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PendingAlertComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PendingAlertComponent, selectors: [["app-pending-alert"]], inputs: { pendingCount: [1, "pendingCount"] }, decls: 1, vars: 1, consts: [[1, "alert"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"]], template: function PendingAlertComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, PendingAlertComponent_Conditional_0_Template, 7, 3, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.pendingCount() > 0 ? 0 : -1);
    }
  }, styles: ["\n\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 16px;\n  background: color-mix(in srgb, var(--warning) 12%, transparent);\n  border: 1px solid color-mix(in srgb, var(--warning) 30%, transparent);\n  border-radius: var(--radius-sm);\n  color: var(--warning);\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 16px;\n}\n.alert[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=pending-alert.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PendingAlertComponent, [{
    type: Component,
    args: [{ selector: "app-pending-alert", standalone: true, template: `
    @if (pendingCount() > 0) {
      <div class="alert">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <span>{{ pendingCount() }} tarea{{ pendingCount() > 1 ? 's' : '' }} pendiente{{ pendingCount() > 1 ? 's' : '' }}</span>
      </div>
    }
  `, styles: ["/* angular:styles/component:scss;e84a37f9e9c7b6168bd9c5ff9dea3014fcdd2b56f0e9d2eeb7615b4713b06a98;/home/claudia.andreu/weekly-routine/src/app/features/today/components/pending-alert/pending-alert.component.ts */\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 16px;\n  background: color-mix(in srgb, var(--warning) 12%, transparent);\n  border: 1px solid color-mix(in srgb, var(--warning) 30%, transparent);\n  border-radius: var(--radius-sm);\n  color: var(--warning);\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 16px;\n}\n.alert svg {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=pending-alert.component.css.map */\n"] }]
  }], null, { pendingCount: [{ type: Input, args: [{ isSignal: true, alias: "pendingCount", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PendingAlertComponent, { className: "PendingAlertComponent", filePath: "src/app/features/today/components/pending-alert/pending-alert.component.ts", lineNumber: 40 });
})();

// src/app/core/services/notification.service.ts
var NotificationService = class _NotificationService {
  permission = "default";
  requestPermission() {
    return __async(this, null, function* () {
      if (!("Notification" in window))
        return false;
      this.permission = yield Notification.requestPermission();
      return this.permission === "granted";
    });
  }
  notify(title, body) {
    if (this.permission !== "granted")
      return;
    new Notification(title, {
      body,
      icon: "/icons/icon-192x192.png",
      badge: "/icons/icon-72x72.png"
    });
  }
  scheduleReminder(title, time, delayMs) {
    return window.setTimeout(() => {
      this.notify("Recordatorio", `${time} - ${title}`);
    }, delayMs);
  }
  notifyPendingTasks(count) {
    if (count === 0)
      return;
    this.notify("Tareas pendientes", `Tienes ${count} tarea${count > 1 ? "s" : ""} pendiente${count > 1 ? "s" : ""} hoy`);
  }
  static \u0275fac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/today/components/today-view/today-view.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function TodayViewComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 10);
    \u0275\u0275element(2, "path", 11)(3, "rect", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "No hay tareas para hoy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Pulsa + para a\xF1adir una");
    \u0275\u0275elementEnd()();
  }
}
function TodayViewComponent_Conditional_10_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "polyline", 27);
    \u0275\u0275elementEnd();
  }
}
function TodayViewComponent_Conditional_10_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "timeFormat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, task_r2.time));
  }
}
function TodayViewComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 14)(1, "button", 15);
    \u0275\u0275listener("click", function TodayViewComponent_Conditional_10_For_2_Template_button_click_1_listener() {
      const task_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggle(task_r2.id));
    });
    \u0275\u0275elementStart(2, "div", 16);
    \u0275\u0275conditionalCreate(3, TodayViewComponent_Conditional_10_For_2_Conditional_3_Template, 2, 0, ":svg:svg", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 18);
    \u0275\u0275listener("click", function TodayViewComponent_Conditional_10_For_2_Template_div_click_4_listener() {
      const task_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editExisting(task_r2));
    });
    \u0275\u0275elementStart(5, "span", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 20);
    \u0275\u0275conditionalCreate(8, TodayViewComponent_Conditional_10_For_2_Conditional_8_Template, 3, 3, "span", 21);
    \u0275\u0275elementStart(9, "span", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 23);
    \u0275\u0275listener("click", function TodayViewComponent_Conditional_10_For_2_Template_button_click_11_listener() {
      const task_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteTask(task_r2.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 24);
    \u0275\u0275element(13, "polyline", 25)(14, "path", 26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const task_r2 = ctx.$implicit;
    \u0275\u0275styleProp("--task-color", task_r2.color);
    \u0275\u0275classProp("completed", task_r2.completed);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("checked", task_r2.completed);
    \u0275\u0275advance();
    \u0275\u0275conditional(task_r2.completed ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(task_r2.time ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", task_r2.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r2.category);
  }
}
function TodayViewComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 7);
    \u0275\u0275repeaterCreate(1, TodayViewComponent_Conditional_10_For_2_Template, 15, 12, "li", 13, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.week.todayTasks());
  }
}
var TodayViewComponent = class _TodayViewComponent {
  week;
  notifications;
  showForm = signal(false, ...ngDevMode ? [{ debugName: "showForm" }] : []);
  editingTask = signal(null, ...ngDevMode ? [{ debugName: "editingTask" }] : []);
  dayName = computed(() => DAY_NAMES[this.week.todayDayOfWeek()], ...ngDevMode ? [{ debugName: "dayName" }] : []);
  dateLabel = computed(() => {
    const today = /* @__PURE__ */ new Date();
    return today.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }, ...ngDevMode ? [{ debugName: "dateLabel" }] : []);
  pendingCount = computed(() => this.week.todayTotal() - this.week.todayCompleted(), ...ngDevMode ? [{ debugName: "pendingCount" }] : []);
  constructor(week, notifications) {
    this.week = week;
    this.notifications = notifications;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.week.goToCurrentWeek();
      yield this.notifications.requestPermission();
      const pending = this.pendingCount();
      if (pending > 0) {
        this.notifications.notifyPendingTasks(pending);
      }
    });
  }
  toggle(id) {
    return __async(this, null, function* () {
      yield this.week.toggleTask(id);
    });
  }
  editExisting(task) {
    this.editingTask.set(task);
    this.showForm.set(true);
  }
  closeForm() {
    this.showForm.set(false);
    this.editingTask.set(null);
  }
  onSaveTask(data) {
    return __async(this, null, function* () {
      const existing = this.editingTask();
      if (existing) {
        yield this.week.updateTask(existing.id, data);
      } else {
        const order = yield this.week.getNextOrder(data.dayOfWeek);
        const task = {
          id: crypto.randomUUID(),
          title: data.title,
          description: data.description,
          dayOfWeek: data.dayOfWeek,
          weekStartDate: this.week.weekStartDate(),
          time: data.time,
          completed: false,
          category: data.category,
          color: data.color,
          isRecurring: data.isRecurring,
          order,
          reminder: data.reminder
        };
        yield this.week.addTask(task);
      }
      this.closeForm();
    });
  }
  deleteTask(id) {
    return __async(this, null, function* () {
      yield this.week.deleteTask(id);
    });
  }
  static \u0275fac = function TodayViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TodayViewComponent)(\u0275\u0275directiveInject(WeekService), \u0275\u0275directiveInject(NotificationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TodayViewComponent, selectors: [["app-today-view"]], decls: 13, vars: 11, consts: [[1, "today-page"], [1, "header"], [1, "header-info"], [1, "date-label"], [3, "progress", "completed", "total", "size"], [3, "pendingCount"], [1, "empty"], [1, "task-list"], [3, "fabClick"], [3, "close", "saveTask", "visible", "editTask", "defaultDay"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"], ["x", "9", "y", "3", "width", "6", "height", "4", "rx", "1"], [1, "task-item", 3, "completed", "--task-color"], [1, "task-item"], [1, "check-btn", 3, "click"], [1, "checkbox"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3"], [1, "task-content", 3, "click"], [1, "task-title"], [1, "task-meta"], [1, "task-time"], [1, "task-cat"], [1, "delete-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"], ["points", "20 6 9 17 4 12"]], template: function TodayViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(7, "app-progress-ring", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-pending-alert", 5);
      \u0275\u0275conditionalCreate(9, TodayViewComponent_Conditional_9_Template, 8, 0, "div", 6)(10, TodayViewComponent_Conditional_10_Template, 3, 0, "ul", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "app-fab-button", 8);
      \u0275\u0275listener("fabClick", function TodayViewComponent_Template_app_fab_button_fabClick_11_listener() {
        return ctx.showForm.set(true);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "app-task-form", 9);
      \u0275\u0275listener("close", function TodayViewComponent_Template_app_task_form_close_12_listener() {
        return ctx.closeForm();
      })("saveTask", function TodayViewComponent_Template_app_task_form_saveTask_12_listener($event) {
        return ctx.onSaveTask($event);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.dayName());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.dateLabel());
      \u0275\u0275advance();
      \u0275\u0275property("progress", ctx.week.todayProgress())("completed", ctx.week.todayCompleted())("total", ctx.week.todayTotal())("size", 64);
      \u0275\u0275advance();
      \u0275\u0275property("pendingCount", ctx.pendingCount());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.week.todayTasks().length === 0 ? 9 : 10);
      \u0275\u0275advance(3);
      \u0275\u0275property("visible", ctx.showForm())("editTask", ctx.editingTask())("defaultDay", ctx.week.todayDayOfWeek());
    }
  }, dependencies: [
    CommonModule,
    ProgressRingComponent,
    FabButtonComponent,
    TaskFormComponent,
    PendingAlertComponent,
    TimeFormatPipe
  ], styles: ["\n\n.today-page[_ngcontent-%COMP%] {\n  padding: 16px;\n  padding-top: calc(var(--safe-top) + 16px);\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n}\n.date-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  margin-top: 2px;\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 16px;\n  color: var(--text-muted);\n}\n.empty[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  margin-bottom: 16px;\n  opacity: 0.5;\n}\n.empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 4px;\n  color: var(--text-secondary);\n}\n.empty[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.task-list[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.task-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px;\n  background: var(--bg-card);\n  border-radius: var(--radius);\n  box-shadow: var(--shadow-sm);\n  border-left: 3px solid var(--task-color, var(--primary));\n  transition: opacity 0.3s, transform 0.3s;\n}\n.task-item.completed[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.task-item.completed[_ngcontent-%COMP%]   .task-title[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: var(--text-muted);\n}\n.check-btn[_ngcontent-%COMP%] {\n  padding: 4px;\n  min-width: 44px;\n  min-height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.checkbox[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 2px solid var(--border);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.checkbox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.checkbox.checked[_ngcontent-%COMP%] {\n  background: var(--success);\n  border-color: var(--success);\n  color: white;\n}\n.task-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  cursor: pointer;\n}\n.task-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  display: block;\n  transition: color 0.2s;\n}\n.task-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 4px;\n  font-size: 12px;\n}\n.task-time[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n.task-cat[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.delete-btn[_ngcontent-%COMP%] {\n  padding: 8px;\n  min-width: 40px;\n  min-height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  transition: color 0.2s;\n}\n.delete-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.delete-btn[_ngcontent-%COMP%]:active {\n  color: var(--danger);\n}\n/*# sourceMappingURL=today-view.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TodayViewComponent, [{
    type: Component,
    args: [{ selector: "app-today-view", standalone: true, imports: [
      CommonModule,
      ProgressRingComponent,
      FabButtonComponent,
      TaskFormComponent,
      PendingAlertComponent,
      TimeFormatPipe
    ], template: `
    <div class="today-page">
      <header class="header">
        <div class="header-info">
          <h1>{{ dayName() }}</h1>
          <p class="date-label">{{ dateLabel() }}</p>
        </div>
        <app-progress-ring
          [progress]="week.todayProgress()"
          [completed]="week.todayCompleted()"
          [total]="week.todayTotal()"
          [size]="64"
        />
      </header>

      <app-pending-alert [pendingCount]="pendingCount()" />

      @if (week.todayTasks().length === 0) {
        <div class="empty">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
            <rect x="9" y="3" width="6" height="4" rx="1" />
          </svg>
          <p>No hay tareas para hoy</p>
          <span>Pulsa + para a\xF1adir una</span>
        </div>
      } @else {
        <ul class="task-list">
          @for (task of week.todayTasks(); track task.id) {
            <li
              class="task-item"
              [class.completed]="task.completed"
              [style.--task-color]="task.color"
            >
              <button class="check-btn" (click)="toggle(task.id)">
                <div class="checkbox" [class.checked]="task.completed">
                  @if (task.completed) {
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  }
                </div>
              </button>
              <div class="task-content" (click)="editExisting(task)">
                <span class="task-title">{{ task.title }}</span>
                <div class="task-meta">
                  @if (task.time) {
                    <span class="task-time">{{ task.time | timeFormat }}</span>
                  }
                  <span class="task-cat" [style.color]="task.color">{{ task.category }}</span>
                </div>
              </div>
              <button class="delete-btn" (click)="deleteTask(task.id)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
              </button>
            </li>
          }
        </ul>
      }
    </div>

    <app-fab-button (fabClick)="showForm.set(true)" />

    <app-task-form
      [visible]="showForm()"
      [editTask]="editingTask()"
      [defaultDay]="week.todayDayOfWeek()"
      (close)="closeForm()"
      (saveTask)="onSaveTask($event)"
    />
  `, styles: ["/* angular:styles/component:scss;a5ee14eb2bd455bebef42a7316562c42c41c8bad4c4369a548ca1f617c55b10c;/home/claudia.andreu/weekly-routine/src/app/features/today/components/today-view/today-view.component.ts */\n.today-page {\n  padding: 16px;\n  padding-top: calc(var(--safe-top) + 16px);\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\nh1 {\n  font-size: 28px;\n  font-weight: 700;\n}\n.date-label {\n  font-size: 14px;\n  color: var(--text-secondary);\n  margin-top: 2px;\n}\n.empty {\n  text-align: center;\n  padding: 48px 16px;\n  color: var(--text-muted);\n}\n.empty svg {\n  width: 48px;\n  height: 48px;\n  margin-bottom: 16px;\n  opacity: 0.5;\n}\n.empty p {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 4px;\n  color: var(--text-secondary);\n}\n.empty span {\n  font-size: 14px;\n}\n.task-list {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.task-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px;\n  background: var(--bg-card);\n  border-radius: var(--radius);\n  box-shadow: var(--shadow-sm);\n  border-left: 3px solid var(--task-color, var(--primary));\n  transition: opacity 0.3s, transform 0.3s;\n}\n.task-item.completed {\n  opacity: 0.6;\n}\n.task-item.completed .task-title {\n  text-decoration: line-through;\n  color: var(--text-muted);\n}\n.check-btn {\n  padding: 4px;\n  min-width: 44px;\n  min-height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.checkbox {\n  width: 24px;\n  height: 24px;\n  border: 2px solid var(--border);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.checkbox svg {\n  width: 14px;\n  height: 14px;\n}\n.checkbox.checked {\n  background: var(--success);\n  border-color: var(--success);\n  color: white;\n}\n.task-content {\n  flex: 1;\n  min-width: 0;\n  cursor: pointer;\n}\n.task-title {\n  font-size: 15px;\n  font-weight: 500;\n  display: block;\n  transition: color 0.2s;\n}\n.task-meta {\n  display: flex;\n  gap: 10px;\n  margin-top: 4px;\n  font-size: 12px;\n}\n.task-time {\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n.task-cat {\n  font-weight: 600;\n}\n.delete-btn {\n  padding: 8px;\n  min-width: 40px;\n  min-height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  transition: color 0.2s;\n}\n.delete-btn svg {\n  width: 18px;\n  height: 18px;\n}\n.delete-btn:active {\n  color: var(--danger);\n}\n/*# sourceMappingURL=today-view.component.css.map */\n"] }]
  }], () => [{ type: WeekService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TodayViewComponent, { className: "TodayViewComponent", filePath: "src/app/features/today/components/today-view/today-view.component.ts", lineNumber: 254 });
})();
export {
  TodayViewComponent
};
//# sourceMappingURL=chunk-GS75H54G.js.map
