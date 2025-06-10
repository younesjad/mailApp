# Mail Sender App (Azure Static Web App + Azure Function)

## Features

- Simple HTML frontend
- Sends email using Azure Functions + Nodemailer
- Backend credentials stored as environment variables

## Deployment

1. Fork this repo.
2. In Azure Portal, create a **Static Web App** and connect to this repo.
3. Set the following **App Settings** (in Azure > Static Web App > Configuration):

| Key          | Value                |
|--------------|----------------------|
| SMTP_HOST    | smtp.gmail.com       |
| SMTP_PORT    | 465                  |
| SMTP_USER    | your_email@gmail.com |
| SMTP_PASS    | your_app_password    |

4. Commit + push and your app will be live!
