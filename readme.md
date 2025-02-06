# Backend dev technical test
We want to offer a new feature to our customers showing similar products to the one they are currently seeing. To do this we agreed with our front-end applications to create a new REST API operation that will provide them the product detail of the similar products for a given one. [Here](./similarProducts.yaml) is the contract we agreed.

We already have an endpoint that provides the product Ids similar for a given one. We also have another endpoint that returns the product detail by product Id. [Here](./existingApis.yaml) is the documentation of the existing APIs.

**Create a Spring boot application that exposes the agreed REST API on port 5000.**

![Diagram](./assets/diagram.jpg "Diagram")

Note that _Test_ and _Mocks_ components are given, you must only implement _yourApp_.

## Testing and Self-evaluation
You can run the same test we will put through your application. You just need to have docker installed.

First of all, you may need to enable file sharing for the `shared` folder on your docker dashboard -> settings -> resources -> file sharing.

Then you can start the mocks and other needed infrastructure with the following command.
```
docker-compose up -d simulado influxdb grafana
```
Check that mocks are working with a sample request to [http://localhost:3001/product/1/similarids](http://localhost:3001/product/1/similarids).

To execute the test run:
```
docker-compose run --rm k6 run scripts/test.js
```
Browse [http://localhost:3000/d/Le2Ku9NMk/k6-performance-test](http://localhost:3000/d/Le2Ku9NMk/k6-performance-test) to view the results.

## Evaluation
The following topics will be considered:
- Code clarity and maintainability
- Performance
- Resilience



Test project for a mobile device store built with React.

---

## Installation and Execution  

### 1️⃣ Clone the repository  
```sh
git clone <REPOSITORY_URL>
cd <PROJECT_NAME>
```

### 2️⃣ Install dependencies  
```sh
npm install
```

### 3️⃣ Run in development mode  
```sh
npm start
```
This will start the application at `http://localhost:3000/`.

### 4️⃣ Build for production  
```sh
npm run build
```
The compiled files will be located in the `build/` directory.

### 5️⃣ Run tests  
```sh
npm test
```

### 6️⃣ Check code quality  
```sh
npm run lint
```

---

## Additional Notes  
- To modify the API, edit `src/services/api.js`.  
- Make sure you have **Node.js** installed before running the project.  

---
