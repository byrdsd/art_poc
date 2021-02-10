FROM ruby:3.0.0-alpine3.13

ENV BUNDLER_VERSION=2.2.6
RUN apk add --update --no-cache \
      binutils-gold \
      build-base \
      curl \
      file \
      g++ \
      gcc \
      git \
      less \
      libstdc++ \
      libffi-dev \
      libc-dev \
      linux-headers \
      libxml2-dev \
      libxslt-dev \
      libgcrypt-dev \
      make \
      netcat-openbsd \
      nodejs \
      openssl \
      pkgconfig \
      postgresql-dev \
      tzdata \
      yarn

RUN gem install bundler -v 2.2.6
RUN bundle config --global frozen 1

WORKDIR /usr/src/app

COPY Gemfile Gemfile.lock ./
RUN bundle config build.nokogiri --use-system-libraries
RUN bundle install

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

ENTRYPOINT ["./entrypoints/docker-entrypoint.sh"]