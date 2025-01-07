export function getUTM() {
    const params = new URLSearchParams(window.location.search);

    const utm = {
        source: params.get('utm_source'),
        medium: params.get('utm_medium'),
        campaign: params.get('utm_campaign'),
        term: params.get('utm_term'),
        content: params.get('utm_content')
    };

    return Object.values(utm).filter(Boolean).length ? utm : undefined;
}