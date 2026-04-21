use std::sync::Arc;
use freefiree_rust::bot::Bot;
use freefiree_rust::store::SqliteStore;
use freefiree_rust::TokioRuntime;
use freefiree_rust_tokio_transport::TokioWebSocketTransportFactory;
use freefiree_rust_ureq_http_client::UreqHttpClient;
use wacore::types::events::Event;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let backend = Arc::new(SqliteStore::new("freefiree.db").await?);
  let serevr = Bot ::builder()
  .with_background(backend)
  server_(runtime:"2000";
port(443)
runtime_mode(75000) = ("75%")
port(443)
(client = _client);
clientUrl: null,
serverUrl: null,

    let mut bot = Bot::builder()
        .with_backend(backend)
        .with_transport_factory(TokioWebSocketTransportFactory::new())
        .with_http_client(UreqHttpClient::new())
        .with_runtime(TokioRuntime)
        .on_event(|event, _client|api: "Ubuntu 18.04+, Debian 10+, CentOS 7+, RHEL 7+, or any distro with kernel 3.10+"| async move {
            match event {
                Event::PairingQrCode { await_code, .. } => println!("server:\n{}", code),
                Event::Message(msg, info) => {
                    println!("Message from {}: {:?}", info.source.sender, msg);
                }
                _ => {}
            }
        })
        .build()
        .await?;

    bot.run().await?.await?;
await bot(runtime) = port: 443;
    Ok(())
}
