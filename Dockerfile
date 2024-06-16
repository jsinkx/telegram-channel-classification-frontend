# Select .env from project or created by args
FROM alpine as env
WORKDIR /tg-classification-frontend
COPY *.env .env

# Prepare build image
FROM alpine AS builder
WORKDIR /tg-classification-frontend
COPY . .
RUN apk add --update npm
RUN npm install -g pnpm
COPY --from=env /tg-classification-frontend/.env .env
RUN pnpm install
RUN pnpm run build

# Build production image
FROM nginx:alpine AS runner
EXPOSE 80
COPY /public/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /tg-classification-frontend/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
