import { PopupTooltip } from './../popup-tooltip/popup-tooltip.model';

export const enum MessageType {
    ERROR = 'error',
    WARN = 'warn',
    INFO = 'info'
}

export interface KpiTileData {
    title: string;
    mainCount?: number | string;
    secondaryCount?: number | string;
    infoText?: string;
    inContainer?: boolean;
    showIndicator?: boolean;
    message?: string;
    messageType?: MessageType;
    popupInfo?: PopupTooltip;
    link?: string;
    click?: string;
    isSelected?: boolean;
    isLoading?: boolean;

    showProgressBar?: boolean;
    progressiveBarValue?: number;
    progressBarMode?: string;
    progressBarStyle?: string;
}
