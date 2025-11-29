import mitt, {Emitter} from 'mitt';

// 定义事件名称类型
export enum EventName {
    SHOW_MESSAGE = 'showMessage',
    // 可以在这里添加更多的事件名称
}

// 定义事件回调函数类型
type EventCallback = (payload?: any) => void;

// 单例模式：确保 emitter 实例唯一
let emitter: Emitter<any> | null = null;

// 创建事件总线实例
const createEmitter = (): Emitter<any> => {
    if (!emitter) {
        emitter = mitt();
    }
    return emitter;
};

// 统一管理事件的方法
export const EventBus = {
    // 绑定事件
    on: (eventName: EventName, callback: EventCallback) => {
        const bus = createEmitter();
        bus.on(eventName, callback);
    },

    // 解绑事件
    off: (eventName: EventName, callback?: EventCallback) => {
        const bus = createEmitter();
        bus.off(eventName, callback);
    },

    // 触发事件
    emit: (eventName: EventName, payload?: any) => {
        const bus = createEmitter();
        try {
            bus.emit(eventName, payload);
        } catch (error) {
            console.error(`Error emitting event "${eventName}":`, error);
        }
    },
};

// 导出事件管理器
export const EventManager = {
    showMessage: (type: 'success' | 'error' | 'warning' | 'info', message: string | string[], options?: {
        dangerouslyUseHTMLString?: boolean
    }) => {
        EventBus.emit(EventName.SHOW_MESSAGE, {type, message, ...options});
    }
    // 可以在这里添加更多的事件管理方法
};
