# RentalSign Agent

A conversational AI agent that transforms rental applications into natural dialogue and automatically generates DocuSign documents. Built with Agentman for the DocuSign Hackathon: Unlocked.

## Quick Setup

1. **Import Agent**
   - Download `Rental Application Agent with DocuSign - 01-15-2025.json` from this repo
   - Go to [Agentman Studio]([https://studio.chainofagents.ai](https://studio.chainofagents.ai/register-beta-launch-01-06)/) to register 
   - Go to Agents page
   - Click "Import Agent"
   - Upload `Rental Application Agent with DocuSign - 01-15-2025.json`

2. **Connect Your DocuSign Contract**
   - In the Tools tab, locate the Zapier webhook URL
   - Create a new Zap in Zapier:
     * Trigger: Webhook
     * Action: DocuSign - Create Envelope
   - Replace the existing webhook URL with your new Zapier webhook URL
   - Test the integration

That's it! Your agent is ready to start processing rental applications.

## Testing

Try these test scenarios:
- Search for properties. The current agent uses synthetic or mock data for rental property listings.
- Submit a rental application
- Check DocuSign envelope generation

## Support

- Questions? Join our [Discord](https://discord.gg/agentman)
- Email: support@yourdomain.com

## License

MIT License - see [LICENSE.md](LICENSE.md)

---
Built with [Agentman](https://agentman.ai) | Powered by [DocuSign](https://docusign.com)