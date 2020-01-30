export interface PopupTooltip {
    text: string;
    closeOnMouseLeave: boolean;
}

export interface KpiTileData {
    title: string;
    mainCount?: number | string;
    secondaryCount?: number | string;
    infoText?: string;
    inContainer?: boolean;
    showIndicator?: boolean;
    message?: string;
    messageType?: 'error' | 'warn' | 'info';
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
