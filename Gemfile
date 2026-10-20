source "https://rubygems.org"

# Local preview:  bundle install && bundle exec jekyll serve
#
# Uses Jekyll 4 rather than the "github-pages" gem, because github-pages pins
# Jekyll 3.9 / Liquid 4.0.3, which crash on Ruby 3.2+. GitHub Pages ignores
# this file and builds the site with its own Jekyll, so keep to features
# both versions support.
gem "jekyll", "~> 4.4"
gem "webrick"

group :jekyll_plugins do
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
end
