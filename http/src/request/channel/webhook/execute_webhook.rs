use crate::request::prelude::*;
use twilight_model::{
    channel::{embed::Embed, Message},
    id::WebhookId,
};

#[derive(Default, Serialize)]
struct ExecuteWebhookFields {
    avatar_url: Option<String>,
    content: Option<String>,
    embeds: Option<Vec<Embed>>,
    file: Option<Vec<u8>>,
    payload_json: Option<Vec<u8>>,
    tts: Option<bool>,
    username: Option<String>,
    wait: Option<bool>,
}

/// Executes a webhook, sending a message to its channel.
///
/// You can only specify one of [`content`], [`embeds`], or [`file`].
///
/// # Examples
///
/// ```rust,no_run
/// use twilight_http::Client;
/// use twilight_model::id::WebhookId;
///
/// # #[tokio::main]
/// # async fn main() -> Result<(), Box<dyn std::error::Error>> {
/// let client = Client::new("my token");
/// let id = WebhookId(432);
///
/// let webhook = client
///     .execute_webhook(id, "webhook token")
///     .content("Pinkie...")
///     .await?;
/// # Ok(()) }
/// ```
///
/// [`content`]: #method.content
/// [`embeds`]: #method.embeds
/// [`file`]: #method.file
pub struct ExecuteWebhook<'a> {
    fields: ExecuteWebhookFields,
    fut: Option<Pending<'a, Option<Message>>>,
    http: &'a Client,
    token: String,
    webhook_id: WebhookId,
}

impl<'a> ExecuteWebhook<'a> {
    pub(crate) fn new(http: &'a Client, webhook_id: WebhookId, token: impl Into<String>) -> Self {
        Self {
            fields: ExecuteWebhookFields::default(),
            fut: None,
            http,
            token: token.into(),
            webhook_id,
        }
    }

    /// The URL of the avatar of the webhook.
    pub fn avatar_url(mut self, avatar_url: impl Into<String>) -> Self {
        self.fields.avatar_url.replace(avatar_url.into());

        self
    }

    /// The content of the webook's message.
    ///
    /// Up to 2000 UTF-16 codepoints, same as a message.
    pub fn content(mut self, content: impl Into<String>) -> Self {
        self.fields.content.replace(content.into());

        self
    }

    /// Set the list of embeds of the webhook's message.
    pub fn embeds(mut self, embeds: Vec<Embed>) -> Self {
        self.fields.embeds.replace(embeds);

        self
    }

    /// Attach a file to the webhook.
    pub fn file(mut self, file: impl Into<Vec<u8>>) -> Self {
        self.fields.file.replace(file.into());

        self
    }

    /// JSON encoded body of any additional request fields. See [Discord Docs/Create Message]
    ///
    /// [Discord Docs/Create Message]: https://discord.com/developers/docs/resources/channel#create-message-params
    pub fn payload_json(mut self, payload_json: impl Into<Vec<u8>>) -> Self {
        self.fields.payload_json.replace(payload_json.into());

        self
    }

    /// Specify true if the message is TTS.
    pub fn tts(mut self, tts: bool) -> Self {
        self.fields.tts.replace(tts);

        self
    }

    /// Specify the username of the webhook's message.
    pub fn username(mut self, username: impl Into<String>) -> Self {
        self.fields.username.replace(username.into());

        self
    }

    /// If true, wait for the message to send before sending a response. See [Discord Docs/Execute
    /// Webhook]
    ///
    /// [Discord Docs/Execute Webhook]: https://discord.com/developers/docs/resources/webhook#execute-webhook-querystring-params
    pub fn wait(mut self, wait: bool) -> Self {
        self.fields.wait.replace(wait);

        self
    }

    fn start(&mut self) -> Result<()> {
        self.fut.replace(Box::pin(self.http.request(Request::from((
            crate::json_to_vec(&self.fields)?,
            Route::ExecuteWebhook {
                token: self.token.to_owned(),
                wait: self.fields.wait,
                webhook_id: self.webhook_id.0,
            },
        )))));

        Ok(())
    }
}

poll_req!(ExecuteWebhook<'_>, Option<Message>);
