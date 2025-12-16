import os
from openai import AzureOpenAI

# Load environment variables
endpoint = os.getenv("AZURE_OPENAI_ENDPOINT")          # e.g. https://hw11.openai.azure.com/
deployment = os.getenv("DEPLOYMENT_NAME")              # Azure Deployment Name
subscription_key = os.getenv("AZURE_OPENAI_KEY")       # Azure API Key
api_version = "2024-12-01-preview"

# Create Azure OpenAI client
client = AzureOpenAI(
    api_key=subscription_key,
    azure_endpoint=endpoint,
    api_version=api_version,
)

print("Azure OpenAI Chat (type 'exit' to quit)\n")

# Optional: keep conversation context
messages = [
    {"role": "system", "content": "You are a helpful assistant."}
]

while True:
    user_input = input("You: ")

    if user_input.lower() in ["exit", "quit"]:
        print("👋 Goodbye!")
        break

    # Add user message
    messages.append({"role": "user", "content": user_input})

    # Send request
    response = client.chat.completions.create(
        model=deployment,
        messages=messages,
        max_tokens=1024,
    )

    assistant_reply = response.choices[0].message.content

    # Add assistant response to conversation
    messages.append({"role": "assistant", "content": assistant_reply})

    print(f"\nAssistant: {assistant_reply}\n")
