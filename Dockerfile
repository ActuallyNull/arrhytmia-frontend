FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
COPY env.example ./
RUN npm install
COPY . .
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]