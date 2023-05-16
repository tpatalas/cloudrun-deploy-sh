<div align="center">

# Google Cloud Run `Deploy.sh` & `Cloud Build` Example with Next.js

[![License](https://img.shields.io/github/license/tpatalas/cloudrun-deploy-sh?color=blue&logo=lincense)]()
[![Last Commit](https://img.shields.io/github/last-commit/tpatalas/cloudrun-deploy-sh?color=blue)](https://github.com/tpatalas/cloudrun-deploy-sh)
[![Project Status](https://img.shields.io/badge/project%20status-active-blue)](https://github.com/tpatalas/cloudrun-deploy-sh/tree/feature/update-README#project-status)

</div>

This repository serves as a practical demonstration of how to use the pre-existing `deploy.sh` script for building Docker images locally, pushing them to the Google Container Registry, and deploying to Google Cloud Run. In addition, it showcases an example of employing Google Cloud Build to handle the same tasks as `deploy.sh`, but within a CI/CD framework.

> Please note that while this repository offers deployment examples, it does not
> provide comprehensive guidance for setting up Google Cloud Platform products.
> Its main aim is to exemplify deployment methodologies.

## How to use

> Important: For production deployment, utilize a CI/CD process like Google Cloud
> Build or Github Actions, instead of the `deploy.sh` script.

1. Create `.env.local` file locally. (you may check out the example of `.example.env.local`)
2. Add required information to build, push, and deploy docker image into Google
   Cloud Run and Google Cloud Registry.
3. You may also need to create the secrets on Google Cloud Secret Manager.
4. Run following command to initiate the docker build, push and deploy:

   ```bash
   sh deploy.sh
   ```

## Installation

### Clone the repository to your favorite directory

1. Clone the repository by running the following command:

```sh
git clone https://github.com/tpatalas/cloudrun-deploy-sh.git
```

## License

This project is licensed under the terms of the MIT License. See the [LICENSE](https://github.com/tpAtalas/cloudrun-deploy-sh/blob/master/LICENSE) file for details.
