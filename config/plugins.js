module.exports = {

    translate: {
        enabled: true,
        config: {
            // Add the name of your provider here (for example 'deepl' for strapi-provider-translate-deepl or the full package name)
            provider: 'deepl',
            providerOptions: {
                // your API key - required and wil cause errors if not provided
                apiKey: '554d2184-73e7-4c40-8fbc-f97c7dbc6453:fx',
            },
            // Which field types are translated (default string, text, richtext, components and dynamiczones)
            // Either string or object with type and format
            // Possible formats: plain, markdown, html (default plain)
            translatedFieldTypes: [
                'string',
                { type: 'text', format: 'plain' },
                { type: 'richtext', format: 'markdown' },
                'component',
                'dynamiczone',
            ],
            // If relations should be translated (default true)
            translateRelations: true,
        },
    },

    'import-export-entries': {
        enabled: true,
        config: {
            // See `Config` section.
        },
    },
}