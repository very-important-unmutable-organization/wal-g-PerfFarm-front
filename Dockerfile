FROM node:17-alpine3.14 as build
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --only=prod
COPY public/ /app/public/
COPY src/ /app/src/
RUN npm run build

FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]