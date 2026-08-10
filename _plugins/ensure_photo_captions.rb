# frozen_string_literal: true

# Preserve authored captions and add a non-destructive fallback for older photo-grid
# entries that only contain an image. The generated caption uses the image alt text,
# avoiding any rewrite of the original post Markdown.
require "nokogiri"

Jekyll::Hooks.register :posts, :post_render do |post|
  fragment = Nokogiri::HTML::DocumentFragment.parse(post.output)

  fragment.css(".photo-grid-item").each_with_index do |item, index|
    caption = item.at_css(".photo-grid-caption")

    unless caption
      image = item.at_css("img")
      next unless image

      caption_text = image["alt"].to_s.strip
      caption_text = "Photo #{index + 1}" if caption_text.empty? || caption_text.casecmp?("image")

      caption = Nokogiri::XML::Node.new("div", fragment)
      caption["class"] = "photo-grid-caption"
      caption.content = caption_text
      item.add_child(caption)
    end

    # Make authored and fallback captions visible even when an upstream theme style
    # or a cached stylesheet has a conflicting display, visibility, or opacity rule.
    caption["style"] = "display:block !important; visibility:visible !important; opacity:1 !important;"
  end

  post.output = fragment.to_html
end
