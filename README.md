
# TravelMemory — AWS Deployment

## About The Project

This project focuses on deploying the TravelMemory web application on AWS. It covers hosting the frontend and backend, connecting MongoDB Atlas, and distributing traffic across multiple EC2 instances.

### Built With

- [React](https://react.dev/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas)
- [Amazon EC2](https://aws.amazon.com/ec2/)
- [Nginx](https://nginx.org/)
- AWS Application Load Balancer

## Getting Started

### Prerequisites

- Git
- Node.js and npm
- MongoDB Atlas account

### Installation

1. Clone the repository:

   ```sh
   git clone YOUR_PRIVATE_REPOSITORY_URL
   cd TravelMemory
   ```

2. Install backend dependencies:

   ```sh
   cd backend
   npm install
   ```

3. Install frontend dependencies:

   ```sh
   cd ../frontend
   npm install
   ```

4. Configure the required environment variables for MongoDB and the backend using the project's configuration.

## Usage

The application allows users to record and share travel experiences. During deployment, the frontend and backend were hosted on EC2 instances, with Nginx handling web traffic and an AWS Application Load Balancer distributing requests.

## Roadmap

- [x] Deploy the application on EC2
- [x] Connect MongoDB Atlas
- [x] Configure Nginx and backend service
- [x] Configure load balancing and health checks
- [x] Test application functionality
- [ ] Configure a custom domain through Cloudflare
- [ ] Configure HTTPS

## Contributing

This repository documents my deployment work based on the original TravelMemory project. Please review the original project's license before reusing or modifying its code.

## License

See the included `LICENSE` file for the applicable license terms.

## Contact

Project repository: `YOUR_PRIVATE_REPOSITORY_URL`

## Acknowledgments

- [Original TravelMemory project](https://github.com/UnpredictablePrashant/TravelMemory)
- [AWS Documentation](https://docs.aws.amazon.com/)
- [MongoDB Atlas Documentation](https://www.mongodb.com/docs/atlas/)
