#!/usr/bin/env ruby
#
# Collects all image URLs from posts by reading raw Markdown source files.
# Stores results in site.data['post_images'] for use in photo-tile.html.
#
# We read raw Markdown instead of post.content (rendered HTML) because
# the Chirpy theme's refactor-content.html transforms <img src="...">
# to <img data-src="..."> for lazy loading, making HTML parsing unreliable.

Jekyll::Hooks.register :site, :post_read do |site|
  post_images = []

  site.posts.docs.each do |post|
    raw = File.read(post.path, encoding: 'utf-8')

    # Match Markdown image syntax: ![alt](URL) optionally followed by {: .attr }
    urls = raw.scan(/!\[.*?\]\((https?:\/\/[^\)\s]+)\)/).flatten

    next if urls.empty?

    post_images << {
      'title' => post.data['title'].to_s,
      'url'   => post.url,
      'images' => urls
    }
  end

  site.data['post_images'] = post_images
end
