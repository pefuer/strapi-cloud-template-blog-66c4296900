import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductsProductProperties extends Schema.Component {
  collectionName: 'components_products_product_properties';
  info: {
    displayName: 'ProductProperties';
    icon: 'bulletList';
  };
  attributes: {
    Key: Attribute.String;
    Value: Attribute.String;
  };
}

export interface PublicHeadline extends Schema.Component {
  collectionName: 'components_public_headlines';
  info: {
    displayName: 'Headline';
    icon: 'crown';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface PublicHero extends Schema.Component {
  collectionName: 'components_public_heroes';
  info: {
    displayName: 'Hero';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    body: Attribute.String & Attribute.Required;
    media: Attribute.Media & Attribute.Required;
    link: Attribute.Relation<'public.hero', 'oneToOne', 'api::page.page'>;
    linkLabel: Attribute.String;
  };
}

export interface PublicIntro extends Schema.Component {
  collectionName: 'components_public_intros';
  info: {
    displayName: 'Intro';
    icon: 'filter';
    description: '';
  };
  attributes: {
    meta: Attribute.String;
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface PublicMedia extends Schema.Component {
  collectionName: 'components_public_media';
  info: {
    displayName: 'Media';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['image', 'video']> &
      Attribute.DefaultTo<'image'>;
    media: Attribute.Media;
    layout: Attribute.Enumeration<['width_100', 'width_70', 'width_50']> &
      Attribute.DefaultTo<'width_100'>;
    alignment: Attribute.Enumeration<['left', 'right']> &
      Attribute.DefaultTo<'left'>;
  };
}

export interface PublicParagraphImage extends Schema.Component {
  collectionName: 'components_public_paragraph_images';
  info: {
    displayName: 'Paragraph Image';
    icon: 'cup';
    description: '';
  };
  attributes: {
    body: Attribute.Text & Attribute.Required;
    media: Attribute.Media & Attribute.Required;
    layout: Attribute.Enumeration<['width_50-50', 'width_70-30']> &
      Attribute.DefaultTo<'width_50-50'>;
    reverse: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface PublicParagraph extends Schema.Component {
  collectionName: 'components_public_paragraphs';
  info: {
    displayName: 'Paragraph';
    icon: 'layer';
    description: '';
  };
  attributes: {
    body: Attribute.Text & Attribute.Required;
    layout: Attribute.Enumeration<['width_100', 'width_70', 'width_50']> &
      Attribute.DefaultTo<'width_100'>;
    alignment: Attribute.Enumeration<['left', 'right']> &
      Attribute.DefaultTo<'left'>;
  };
}

export interface PublicQuote extends Schema.Component {
  collectionName: 'components_public_quotes';
  info: {
    displayName: 'Quote';
    icon: 'message';
    description: '';
  };
  attributes: {
    body: Attribute.String & Attribute.Required;
    author: Attribute.String;
    layout: Attribute.Enumeration<['width 100', 'width 70', 'width 50']> &
      Attribute.DefaultTo<'width 100'>;
  };
}

export interface PublicTeaserBlock extends Schema.Component {
  collectionName: 'components_public_teaser_blocks';
  info: {
    displayName: 'Teaser Block';
    icon: 'star';
    description: '';
  };
  attributes: {
    teaser: Attribute.Component<'public.teaser', true> &
      Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
  };
}

export interface PublicTeaser extends Schema.Component {
  collectionName: 'components_public_teasers';
  info: {
    displayName: 'Teaser';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    body: Attribute.String;
    media: Attribute.Media & Attribute.Required;
    link: Attribute.Relation<
      'public.teaser',
      'oneToOne',
      'api::article.article'
    >;
    linkLabel: Attribute.String;
    layout: Attribute.Enumeration<['large', 'medium']> &
      Attribute.DefaultTo<'large'>;
    colorStart: Attribute.Enumeration<['blue', 'red', 'yellow', 'green']> &
      Attribute.DefaultTo<'blue'>;
    colorEnd: Attribute.Enumeration<['yellow', 'purple', 'indigo', 'grey']> &
      Attribute.DefaultTo<'yellow'>;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'products.product-properties': ProductsProductProperties;
      'public.headline': PublicHeadline;
      'public.hero': PublicHero;
      'public.intro': PublicIntro;
      'public.media': PublicMedia;
      'public.paragraph-image': PublicParagraphImage;
      'public.paragraph': PublicParagraph;
      'public.quote': PublicQuote;
      'public.teaser-block': PublicTeaserBlock;
      'public.teaser': PublicTeaser;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
