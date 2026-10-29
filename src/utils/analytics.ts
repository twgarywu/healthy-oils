/**
 * Google Analytics 4 (GA4) 自訂事件追蹤輔助工具
 * 評估 ID: G-KGE8PK035Y
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

/**
 * 追蹤外連至太太官方商店 (zeheart.com) 的點擊事件
 */
export function trackShopClick(destinationUrl: string, locationName: string) {
  trackEvent('click_official_store', {
    destination: destinationUrl,
    button_location: locationName,
    event_category: 'outbound_conversion'
  });
}

/**
 * 追蹤頁籤切換事件
 */
export function trackTabChange(tabId: string, tabName: string) {
  trackEvent('page_view_tab', {
    tab_id: tabId,
    tab_name: tabName
  });
}
