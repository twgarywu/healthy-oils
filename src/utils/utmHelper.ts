/**
 * UTM 參數產生器與導購追蹤工具
 * 協助在所有前往太太官方賣場的按鈕上自動注入精確的 UTM 參數，
 * 讓太太在後台（Shopline、91APP、蝦皮、Google Analytics）一眼看出各個知識章節與測驗的導購成效。
 */

export interface UtmParams {
  source?: string;    // e.g. 'oil_wiki'
  medium?: string;    // e.g. 'hero_cta', 'diagnostic_result', 'navbar', 'smokepoint_tool'
  campaign?: string;  // e.g. 'healthy_oils_2026'
  content?: string;   // e.g. 'flaxseed', 'camellia', 'duo'
}

export function buildShopUrl(
  baseUrl: string,
  params: UtmParams = {}
): string {
  if (!baseUrl) return '#';

  try {
    const url = new URL(baseUrl);
    const source = params.source || 'oil_wiki';
    const medium = params.medium || 'direct_cta';
    const campaign = params.campaign || 'healthy_oils_conversion';

    url.searchParams.set('utm_source', source);
    url.searchParams.set('utm_medium', medium);
    url.searchParams.set('utm_campaign', campaign);

    if (params.content) {
      url.searchParams.set('utm_content', params.content);
    }

    return url.toString();
  } catch {
    // If not a valid absolute URL (e.g. relative or custom string), safely append query
    const separator = baseUrl.includes('?') ? '&' : '?';
    const source = encodeURIComponent(params.source || 'oil_wiki');
    const medium = encodeURIComponent(params.medium || 'direct_cta');
    const campaign = encodeURIComponent(params.campaign || 'healthy_oils_conversion');
    let res = `${baseUrl}${separator}utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}`;
    if (params.content) {
      res += `&utm_content=${encodeURIComponent(params.content)}`;
    }
    return res;
  }
}
