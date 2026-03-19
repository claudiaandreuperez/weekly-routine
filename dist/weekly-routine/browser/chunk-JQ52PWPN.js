import {
  FabButtonComponent,
  TaskFormComponent,
  TimeFormatPipe
} from "./chunk-UQG3IUPV.js";
import {
  DAY_NAMES_SHORT,
  WeekService,
  addDays,
  formatDateShort,
  formatWeekRange,
  getTodayDayOfWeek,
  isCurrentWeek
} from "./chunk-2T5OFTXK.js";
import {
  CommonModule,
  Component,
  Input,
  Output,
  __async,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-J2AZKKVH.js";

// src/app/features/week-view/components/task-card/task-card.component.ts
function TaskCardComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 3);
    \u0275\u0275domElement(1, "polyline", 7);
    \u0275\u0275domElementEnd();
  }
}
function TaskCardComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "timeFormat");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.task().time));
  }
}
var TaskCardComponent = class _TaskCardComponent {
  task = input.required(...ngDevMode ? [{ debugName: "task" }] : []);
  toggle = output();
  edit = output();
  static \u0275fac = function TaskCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaskCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaskCardComponent, selectors: [["app-task-card"]], inputs: { task: [1, "task"] }, outputs: { toggle: "toggle", edit: "edit" }, decls: 8, vars: 9, consts: [[1, "card", 3, "click"], [1, "mini-check", 3, "click"], [1, "dot"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3"], [1, "info"], [1, "title"], [1, "time"], ["points", "20 6 9 17 4 12"]], template: function TaskCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275domListener("click", function TaskCardComponent_Template_div_click_0_listener() {
        return ctx.edit.emit(ctx.task());
      });
      \u0275\u0275domElementStart(1, "button", 1);
      \u0275\u0275domListener("click", function TaskCardComponent_Template_button_click_1_listener($event) {
        ctx.toggle.emit(ctx.task().id);
        return $event.stopPropagation();
      });
      \u0275\u0275domElementStart(2, "div", 2);
      \u0275\u0275conditionalCreate(3, TaskCardComponent_Conditional_3_Template, 2, 0, ":svg:svg", 3);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(4, "div", 4)(5, "span", 5);
      \u0275\u0275text(6);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(7, TaskCardComponent_Conditional_7_Template, 3, 3, "span", 6);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("--task-color", ctx.task().color);
      \u0275\u0275classProp("completed", ctx.task().completed);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("checked", ctx.task().completed);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.task().completed ? 3 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.task().title);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.task().time ? 7 : -1);
    }
  }, dependencies: [TimeFormatPipe], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  background: var(--bg-card);\n  border-radius: var(--radius-sm);\n  border-left: 3px solid var(--task-color);\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.card.completed[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.card.completed[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n.mini-check[_ngcontent-%COMP%] {\n  padding: 2px;\n  min-width: 28px;\n  min-height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dot[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid var(--border);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dot[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n}\n.dot.checked[_ngcontent-%COMP%] {\n  background: var(--success);\n  border-color: var(--success);\n  color: white;\n}\n.info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-secondary);\n}\n/*# sourceMappingURL=task-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskCardComponent, [{
    type: Component,
    args: [{ selector: "app-task-card", standalone: true, imports: [TimeFormatPipe], template: `
    <div
      class="card"
      [class.completed]="task().completed"
      [style.--task-color]="task().color"
      (click)="edit.emit(task())"
    >
      <button class="mini-check" (click)="toggle.emit(task().id); $event.stopPropagation()">
        <div class="dot" [class.checked]="task().completed">
          @if (task().completed) {
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          }
        </div>
      </button>
      <div class="info">
        <span class="title">{{ task().title }}</span>
        @if (task().time) {
          <span class="time">{{ task().time | timeFormat }}</span>
        }
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;7a3a0837037bc8db4f1afb68d52fb1dd7e40287ac84bd04fc96fa17940a2a517;/home/claudia.andreu/weekly-routine/src/app/features/week-view/components/task-card/task-card.component.ts */\n.card {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  background: var(--bg-card);\n  border-radius: var(--radius-sm);\n  border-left: 3px solid var(--task-color);\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.card.completed {\n  opacity: 0.5;\n}\n.card.completed .title {\n  text-decoration: line-through;\n}\n.mini-check {\n  padding: 2px;\n  min-width: 28px;\n  min-height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dot {\n  width: 18px;\n  height: 18px;\n  border: 2px solid var(--border);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dot svg {\n  width: 10px;\n  height: 10px;\n}\n.dot.checked {\n  background: var(--success);\n  border-color: var(--success);\n  color: white;\n}\n.info {\n  flex: 1;\n  min-width: 0;\n}\n.title {\n  font-size: 13px;\n  font-weight: 500;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.time {\n  font-size: 11px;\n  color: var(--text-secondary);\n}\n/*# sourceMappingURL=task-card.component.css.map */\n"] }]
  }], null, { task: [{ type: Input, args: [{ isSignal: true, alias: "task", required: true }] }], toggle: [{ type: Output, args: ["toggle"] }], edit: [{ type: Output, args: ["edit"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaskCardComponent, { className: "TaskCardComponent", filePath: "src/app/features/week-view/components/task-card/task-card.component.ts", lineNumber: 105 });
})();

// src/app/features/week-view/components/day-column/day-column.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function DayColumnComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r0.progressPct, "%");
  }
}
function DayColumnComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-task-card", 9);
    \u0275\u0275listener("toggle", function DayColumnComponent_For_9_Template_app_task_card_toggle_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleTask.emit($event));
    })("edit", function DayColumnComponent_For_9_Template_app_task_card_edit_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.editTask.emit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r3 = ctx.$implicit;
    \u0275\u0275property("task", task_r3);
  }
}
function DayColumnComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1, "Sin tareas");
    \u0275\u0275elementEnd();
  }
}
var DayColumnComponent = class _DayColumnComponent {
  dayIndex = input.required(...ngDevMode ? [{ debugName: "dayIndex" }] : []);
  tasks = input.required(...ngDevMode ? [{ debugName: "tasks" }] : []);
  isToday = input(false, ...ngDevMode ? [{ debugName: "isToday" }] : []);
  isActive = input(false, ...ngDevMode ? [{ debugName: "isActive" }] : []);
  weekStart = input.required(...ngDevMode ? [{ debugName: "weekStart" }] : []);
  toggleTask = output();
  editTask = output();
  selectDay = output();
  get dayName() {
    return DAY_NAMES_SHORT[this.dayIndex()];
  }
  get dateStr() {
    const monday = new Date(this.weekStart());
    return formatDateShort(addDays(monday, this.dayIndex()));
  }
  get progressPct() {
    const t = this.tasks();
    if (t.length === 0)
      return 0;
    return t.filter((x) => x.completed).length / t.length * 100;
  }
  static \u0275fac = function DayColumnComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DayColumnComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DayColumnComponent, selectors: [["app-day-column"]], inputs: { dayIndex: [1, "dayIndex"], tasks: [1, "tasks"], isToday: [1, "isToday"], isActive: [1, "isActive"], weekStart: [1, "weekStart"] }, outputs: { toggleTask: "toggleTask", editTask: "editTask", selectDay: "selectDay" }, decls: 11, vars: 8, consts: [[1, "day-col"], [1, "day-header", 3, "click"], [1, "day-name"], [1, "day-date"], [1, "progress-pill"], [1, "tasks-container"], [3, "task"], [1, "no-tasks"], [1, "fill"], [3, "toggle", "edit", "task"]], template: function DayColumnComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275listener("click", function DayColumnComponent_Template_div_click_1_listener() {
        return ctx.selectDay.emit(ctx.dayIndex());
      });
      \u0275\u0275elementStart(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, DayColumnComponent_Conditional_6_Template, 2, 2, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275repeaterCreate(8, DayColumnComponent_For_9_Template, 1, 1, "app-task-card", 6, _forTrack0);
      \u0275\u0275conditionalCreate(10, DayColumnComponent_Conditional_10_Template, 2, 0, "div", 7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("today", ctx.isToday())("active", ctx.isActive());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.dayName);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.dateStr);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.tasks().length > 0 ? 6 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.tasks());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tasks().length === 0 ? 10 : -1);
    }
  }, dependencies: [CommonModule, TaskCardComponent], styles: ["\n\n.day-col[_ngcontent-%COMP%] {\n  min-width: 160px;\n  flex-shrink: 0;\n  scroll-snap-align: start;\n}\n.day-header[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px 8px;\n  cursor: pointer;\n}\n.day-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--text-secondary);\n  display: block;\n}\n.day-date[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  display: block;\n  margin-top: 2px;\n}\n.today[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.today[_ngcontent-%COMP%]   .day-date[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 600;\n}\n.progress-pill[_ngcontent-%COMP%] {\n  height: 3px;\n  background: var(--border);\n  border-radius: 2px;\n  margin-top: 6px;\n  overflow: hidden;\n}\n.fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--success);\n  border-radius: 2px;\n  transition: width 0.3s;\n}\n.tasks-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: 0 4px;\n}\n.no-tasks[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 12px;\n  color: var(--text-muted);\n  padding: 20px 0;\n}\n/*# sourceMappingURL=day-column.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DayColumnComponent, [{
    type: Component,
    args: [{ selector: "app-day-column", standalone: true, imports: [CommonModule, TaskCardComponent], template: `
    <div class="day-col" [class.today]="isToday()" [class.active]="isActive()">
      <div class="day-header" (click)="selectDay.emit(dayIndex())">
        <span class="day-name">{{ dayName }}</span>
        <span class="day-date">{{ dateStr }}</span>
        @if (tasks().length > 0) {
          <div class="progress-pill">
            <div class="fill" [style.width.%]="progressPct"></div>
          </div>
        }
      </div>
      <div class="tasks-container">
        @for (task of tasks(); track task.id) {
          <app-task-card
            [task]="task"
            (toggle)="toggleTask.emit($event)"
            (edit)="editTask.emit($event)"
          />
        }
        @if (tasks().length === 0) {
          <div class="no-tasks">Sin tareas</div>
        }
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;4a2fdc7ccfffe5964c83f264993dbfb3874ac4d78159d1debea00bc08d6e63cc;/home/claudia.andreu/weekly-routine/src/app/features/week-view/components/day-column/day-column.component.ts */\n.day-col {\n  min-width: 160px;\n  flex-shrink: 0;\n  scroll-snap-align: start;\n}\n.day-header {\n  text-align: center;\n  padding: 10px 8px;\n  cursor: pointer;\n}\n.day-name {\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--text-secondary);\n  display: block;\n}\n.day-date {\n  font-size: 13px;\n  color: var(--text-muted);\n  display: block;\n  margin-top: 2px;\n}\n.today .day-name {\n  color: var(--primary);\n}\n.today .day-date {\n  color: var(--primary);\n  font-weight: 600;\n}\n.progress-pill {\n  height: 3px;\n  background: var(--border);\n  border-radius: 2px;\n  margin-top: 6px;\n  overflow: hidden;\n}\n.fill {\n  height: 100%;\n  background: var(--success);\n  border-radius: 2px;\n  transition: width 0.3s;\n}\n.tasks-container {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: 0 4px;\n}\n.no-tasks {\n  text-align: center;\n  font-size: 12px;\n  color: var(--text-muted);\n  padding: 20px 0;\n}\n/*# sourceMappingURL=day-column.component.css.map */\n"] }]
  }], null, { dayIndex: [{ type: Input, args: [{ isSignal: true, alias: "dayIndex", required: true }] }], tasks: [{ type: Input, args: [{ isSignal: true, alias: "tasks", required: true }] }], isToday: [{ type: Input, args: [{ isSignal: true, alias: "isToday", required: false }] }], isActive: [{ type: Input, args: [{ isSignal: true, alias: "isActive", required: false }] }], weekStart: [{ type: Input, args: [{ isSignal: true, alias: "weekStart", required: true }] }], toggleTask: [{ type: Output, args: ["toggleTask"] }], editTask: [{ type: Output, args: ["editTask"] }], selectDay: [{ type: Output, args: ["selectDay"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DayColumnComponent, { className: "DayColumnComponent", filePath: "src/app/features/week-view/components/day-column/day-column.component.ts", lineNumber: 104 });
})();

// src/app/features/week-view/components/week-calendar/week-calendar.component.ts
function WeekCalendarComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "Ir a hoy");
    \u0275\u0275elementEnd();
  }
}
function WeekCalendarComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-day-column", 14);
    \u0275\u0275listener("toggleTask", function WeekCalendarComponent_For_14_Template_app_day_column_toggleTask_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onToggle($event));
    })("editTask", function WeekCalendarComponent_For_14_Template_app_day_column_editTask_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit($event));
    })("selectDay", function WeekCalendarComponent_For_14_Template_app_day_column_selectDay_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedDay.set($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("dayIndex", day_r3)("tasks", ctx_r1.week.getTasksForDay(day_r3))("isToday", ctx_r1.isCurrent && day_r3 === ctx_r1.todayIdx)("isActive", ctx_r1.selectedDay() === day_r3)("weekStart", ctx_r1.week.weekStartDate());
  }
}
function WeekCalendarComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    const progress_r5 = ctx_r1.week.getDayProgress(day_r4);
    \u0275\u0275classProp("today", ctx_r1.isCurrent && day_r4 === ctx_r1.todayIdx);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.dayInitials[day_r4]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", progress_r5.completed, "/", progress_r5.total);
  }
}
var WeekCalendarComponent = class _WeekCalendarComponent {
  week;
  days = [0, 1, 2, 3, 4, 5, 6];
  dayInitials = ["L", "M", "X", "J", "V", "S", "D"];
  todayIdx = getTodayDayOfWeek();
  showForm = signal(false, ...ngDevMode ? [{ debugName: "showForm" }] : []);
  editingTask = signal(null, ...ngDevMode ? [{ debugName: "editingTask" }] : []);
  selectedDay = signal(this.todayIdx, ...ngDevMode ? [{ debugName: "selectedDay" }] : []);
  constructor(week) {
    this.week = week;
  }
  get weekRange() {
    return formatWeekRange(this.week.mondayDate());
  }
  get isCurrent() {
    return isCurrentWeek(this.week.weekStartDate());
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.week.loadWeek();
    });
  }
  prevWeek() {
    return __async(this, null, function* () {
      yield this.week.prevWeek();
    });
  }
  nextWeek() {
    return __async(this, null, function* () {
      yield this.week.nextWeek();
    });
  }
  goToday() {
    return __async(this, null, function* () {
      yield this.week.goToCurrentWeek();
      this.selectedDay.set(this.todayIdx);
    });
  }
  onToggle(id) {
    return __async(this, null, function* () {
      yield this.week.toggleTask(id);
    });
  }
  onEdit(task) {
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
  static \u0275fac = function WeekCalendarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WeekCalendarComponent)(\u0275\u0275directiveInject(WeekService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WeekCalendarComponent, selectors: [["app-week-calendar"]], decls: 20, vars: 5, consts: [[1, "week-page"], [1, "header"], [1, "nav-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "15 18 9 12 15 6"], [1, "week-label", 3, "click"], [1, "today-link"], ["points", "9 18 15 12 9 6"], [1, "week-scroll"], [3, "dayIndex", "tasks", "isToday", "isActive", "weekStart"], [1, "week-stats"], [1, "stat-item", 3, "today"], [3, "fabClick"], [3, "close", "saveTask", "visible", "editTask", "defaultDay"], [3, "toggleTask", "editTask", "selectDay", "dayIndex", "tasks", "isToday", "isActive", "weekStart"], [1, "stat-item"], [1, "stat-label"], [1, "stat-val"]], template: function WeekCalendarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "button", 2);
      \u0275\u0275listener("click", function WeekCalendarComponent_Template_button_click_2_listener() {
        return ctx.prevWeek();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "polyline", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(5, "div", 5);
      \u0275\u0275listener("click", function WeekCalendarComponent_Template_div_click_5_listener() {
        return ctx.goToday();
      });
      \u0275\u0275elementStart(6, "h1");
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, WeekCalendarComponent_Conditional_8_Template, 2, 0, "span", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 2);
      \u0275\u0275listener("click", function WeekCalendarComponent_Template_button_click_9_listener() {
        return ctx.nextWeek();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 3);
      \u0275\u0275element(11, "polyline", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "div", 8);
      \u0275\u0275repeaterCreate(13, WeekCalendarComponent_For_14_Template, 1, 5, "app-day-column", 9, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 10);
      \u0275\u0275repeaterCreate(16, WeekCalendarComponent_For_17_Template, 5, 5, "div", 11, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "app-fab-button", 12);
      \u0275\u0275listener("fabClick", function WeekCalendarComponent_Template_app_fab_button_fabClick_18_listener() {
        return ctx.showForm.set(true);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "app-task-form", 13);
      \u0275\u0275listener("close", function WeekCalendarComponent_Template_app_task_form_close_19_listener() {
        return ctx.closeForm();
      })("saveTask", function WeekCalendarComponent_Template_app_task_form_saveTask_19_listener($event) {
        return ctx.onSaveTask($event);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.weekRange);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCurrent ? 8 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.days);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.days);
      \u0275\u0275advance(3);
      \u0275\u0275property("visible", ctx.showForm())("editTask", ctx.editingTask())("defaultDay", ctx.selectedDay());
    }
  }, dependencies: [CommonModule, DayColumnComponent, FabButtonComponent, TaskFormComponent], styles: ["\n\n.week-page[_ngcontent-%COMP%] {\n  padding-top: calc(var(--safe-top) + 8px);\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 12px;\n}\n.nav-btn[_ngcontent-%COMP%] {\n  min-width: 44px;\n  min-height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: background 0.2s;\n}\n.nav-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.nav-btn[_ngcontent-%COMP%]:active {\n  background: var(--bg-surface);\n}\n.week-label[_ngcontent-%COMP%] {\n  text-align: center;\n  cursor: pointer;\n}\n.week-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n}\n.week-label[_ngcontent-%COMP%]   .today-link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--primary);\n  font-weight: 500;\n}\n.week-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  gap: 4px;\n  padding: 0 8px 16px;\n  -webkit-overflow-scrolling: touch;\n}\n.week-stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  padding: 8px 16px;\n  background: var(--bg-card);\n  border-radius: var(--radius) var(--radius) 0 0;\n  margin: 0 8px;\n  box-shadow: var(--shadow-sm);\n}\n.stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.stat-item.today[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 700;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  display: block;\n}\n.stat-val[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n/*# sourceMappingURL=week-calendar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WeekCalendarComponent, [{
    type: Component,
    args: [{ selector: "app-week-calendar", standalone: true, imports: [CommonModule, DayColumnComponent, FabButtonComponent, TaskFormComponent], template: `
    <div class="week-page">
      <header class="header">
        <button class="nav-btn" (click)="prevWeek()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div class="week-label" (click)="goToday()">
          <h1>{{ weekRange }}</h1>
          @if (!isCurrent) {
            <span class="today-link">Ir a hoy</span>
          }
        </div>
        <button class="nav-btn" (click)="nextWeek()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </header>

      <div class="week-scroll">
        @for (day of days; track day) {
          <app-day-column
            [dayIndex]="day"
            [tasks]="week.getTasksForDay(day)"
            [isToday]="isCurrent && day === todayIdx"
            [isActive]="selectedDay() === day"
            [weekStart]="week.weekStartDate()"
            (toggleTask)="onToggle($event)"
            (editTask)="onEdit($event)"
            (selectDay)="selectedDay.set($event)"
          />
        }
      </div>

      <div class="week-stats">
        @for (day of days; track day) {
          @let progress = week.getDayProgress(day);
          <div class="stat-item" [class.today]="isCurrent && day === todayIdx">
            <span class="stat-label">{{ dayInitials[day] }}</span>
            <span class="stat-val">{{ progress.completed }}/{{ progress.total }}</span>
          </div>
        }
      </div>
    </div>

    <app-fab-button (fabClick)="showForm.set(true)" />

    <app-task-form
      [visible]="showForm()"
      [editTask]="editingTask()"
      [defaultDay]="selectedDay()"
      (close)="closeForm()"
      (saveTask)="onSaveTask($event)"
    />
  `, styles: ["/* angular:styles/component:scss;c371892438970d3cdf6bf445da18e395f1ce8995de2b51be8a0f2626395fb92b;/home/claudia.andreu/weekly-routine/src/app/features/week-view/components/week-calendar/week-calendar.component.ts */\n.week-page {\n  padding-top: calc(var(--safe-top) + 8px);\n}\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 12px;\n}\n.nav-btn {\n  min-width: 44px;\n  min-height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: background 0.2s;\n}\n.nav-btn svg {\n  width: 22px;\n  height: 22px;\n}\n.nav-btn:active {\n  background: var(--bg-surface);\n}\n.week-label {\n  text-align: center;\n  cursor: pointer;\n}\n.week-label h1 {\n  font-size: 17px;\n  font-weight: 700;\n}\n.week-label .today-link {\n  font-size: 12px;\n  color: var(--primary);\n  font-weight: 500;\n}\n.week-scroll {\n  display: flex;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  gap: 4px;\n  padding: 0 8px 16px;\n  -webkit-overflow-scrolling: touch;\n}\n.week-stats {\n  display: flex;\n  justify-content: space-around;\n  padding: 8px 16px;\n  background: var(--bg-card);\n  border-radius: var(--radius) var(--radius) 0 0;\n  margin: 0 8px;\n  box-shadow: var(--shadow-sm);\n}\n.stat-item {\n  text-align: center;\n}\n.stat-item.today .stat-label {\n  color: var(--primary);\n  font-weight: 700;\n}\n.stat-label {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  display: block;\n}\n.stat-val {\n  font-size: 12px;\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n/*# sourceMappingURL=week-calendar.component.css.map */\n"] }]
  }], () => [{ type: WeekService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WeekCalendarComponent, { className: "WeekCalendarComponent", filePath: "src/app/features/week-view/components/week-calendar/week-calendar.component.ts", lineNumber: 165 });
})();
export {
  WeekCalendarComponent
};
//# sourceMappingURL=chunk-JQ52PWPN.js.map
