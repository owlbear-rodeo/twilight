var N = null;var sourcesIndex = {};
sourcesIndex["twilight"] = {"name":"","files":["lib.rs"]};
sourcesIndex["twilight_cache_inmemory"] = {"name":"","dirs":[{"name":"model","files":["emoji.rs","guild.rs","member.rs","message.rs","mod.rs","presence.rs","voice_state.rs"]}],"files":["builder.rs","config.rs","lib.rs","stats.rs","updates.rs"]};
sourcesIndex["twilight_command_parser"] = {"name":"","files":["arguments.rs","casing.rs","config.rs","lib.rs","parser.rs"]};
sourcesIndex["twilight_embed_builder"] = {"name":"","files":["author.rs","builder.rs","field.rs","footer.rs","image_source.rs","lib.rs"]};
sourcesIndex["twilight_gateway"] = {"name":"","dirs":[{"name":"cluster","files":["builder.rs","config.rs","impl.rs","mod.rs","scheme.rs"]},{"name":"shard","dirs":[{"name":"processor","files":["emitter.rs","heartbeat.rs","impl.rs","inflater.rs","mod.rs","session.rs","socket_forwarder.rs","throttle.rs"]}],"files":["builder.rs","config.rs","event.rs","impl.rs","json.rs","mod.rs","raw_message.rs","stage.rs"]}],"files":["event.rs","lib.rs","listener.rs"]};
sourcesIndex["twilight_gateway_queue"] = {"name":"","files":["day_limiter.rs","large_bot_queue.rs","lib.rs"]};
sourcesIndex["twilight_http"] = {"name":"","dirs":[{"name":"client","files":["builder.rs","mod.rs"]},{"name":"ratelimiting","files":["bucket.rs","error.rs","headers.rs","mod.rs"]},{"name":"request","dirs":[{"name":"channel","dirs":[{"name":"invite","files":["create_invite.rs","delete_invite.rs","get_channel_invites.rs","get_invite.rs","mod.rs"]},{"name":"message","files":["create_message.rs","crosspost_message.rs","delete_message.rs","delete_messages.rs","get_channel_messages.rs","get_channel_messages_configured.rs","get_message.rs","mod.rs","update_message.rs"]},{"name":"reaction","files":["create_reaction.rs","delete_all_reaction.rs","delete_all_reactions.rs","delete_reaction.rs","get_reactions.rs","mod.rs"]},{"name":"stage","files":["create_stage_instance.rs","delete_stage_instance.rs","get_stage_instance.rs","mod.rs","update_stage_instance.rs"]},{"name":"webhook","files":["create_webhook.rs","delete_webhook.rs","delete_webhook_message.rs","execute_webhook.rs","get_channel_webhooks.rs","get_webhook.rs","get_webhook_message.rs","mod.rs","update_webhook.rs","update_webhook_message.rs","update_webhook_with_token.rs"]}],"files":["create_pin.rs","create_typing_trigger.rs","delete_channel.rs","delete_channel_permission.rs","delete_channel_permission_configured.rs","delete_pin.rs","follow_news_channel.rs","get_channel.rs","get_pins.rs","mod.rs","update_channel.rs","update_channel_permission.rs","update_channel_permission_configured.rs"]},{"name":"guild","dirs":[{"name":"ban","files":["create_ban.rs","delete_ban.rs","get_ban.rs","get_bans.rs","mod.rs"]},{"name":"create_guild","files":["builder.rs","mod.rs"]},{"name":"emoji","files":["create_emoji.rs","delete_emoji.rs","get_emoji.rs","get_emojis.rs","mod.rs","update_emoji.rs"]},{"name":"integration","files":["delete_guild_integration.rs","get_guild_integrations.rs","mod.rs"]},{"name":"member","files":["add_guild_member.rs","add_role_to_member.rs","get_guild_members.rs","get_member.rs","mod.rs","remove_member.rs","remove_role_from_member.rs","search_guild_members.rs","update_guild_member.rs"]},{"name":"role","files":["create_role.rs","delete_role.rs","get_guild_roles.rs","mod.rs","update_role.rs","update_role_positions.rs"]},{"name":"user","files":["mod.rs","update_current_user_voice_state.rs","update_user_voice_state.rs"]}],"files":["create_guild_channel.rs","create_guild_prune.rs","delete_guild.rs","get_audit_log.rs","get_guild.rs","get_guild_channels.rs","get_guild_invites.rs","get_guild_preview.rs","get_guild_prune_count.rs","get_guild_vanity_url.rs","get_guild_voice_regions.rs","get_guild_webhooks.rs","get_guild_welcome_screen.rs","get_guild_widget.rs","mod.rs","update_current_user_nick.rs","update_guild.rs","update_guild_channel_positions.rs","update_guild_welcome_screen.rs","update_guild_widget.rs"]},{"name":"template","files":["create_guild_from_template.rs","create_template.rs","delete_template.rs","get_template.rs","get_templates.rs","mod.rs","sync_template.rs","update_template.rs"]},{"name":"user","files":["create_private_channel.rs","get_current_user.rs","get_current_user_connections.rs","get_current_user_guilds.rs","get_user.rs","leave_guild.rs","mod.rs","update_current_user.rs"]}],"files":["audit_reason.rs","base.rs","get_gateway.rs","get_gateway_authed.rs","get_user_application.rs","get_voice_regions.rs","mod.rs","multipart.rs","prelude.rs","validate.rs"]}],"files":["api_error.rs","error.rs","lib.rs","routing.rs"]};
sourcesIndex["twilight_lavalink"] = {"name":"","files":["client.rs","http.rs","lib.rs","model.rs","node.rs","player.rs"]};
sourcesIndex["twilight_mention"] = {"name":"","dirs":[{"name":"parse","files":["error.rs","impl.rs","iter.rs","mod.rs"]}],"files":["fmt.rs","lib.rs"]};
sourcesIndex["twilight_model"] = {"name":"","dirs":[{"name":"channel","dirs":[{"name":"embed","files":["author.rs","field.rs","footer.rs","image.rs","mod.rs","provider.rs","thumbnail.rs","video.rs"]},{"name":"message","dirs":[{"name":"allowed_mentions","files":["builder.rs","mod.rs"]},{"name":"sticker","files":["id.rs","kind.rs","mod.rs"]}],"files":["activity.rs","activity_type.rs","application.rs","flags.rs","kind.rs","mention.rs","mod.rs","reaction.rs","reference.rs"]}],"files":["attachment.rs","category_channel.rs","channel_mention.rs","channel_type.rs","followed_channel.rs","group.rs","mod.rs","permission_overwrite.rs","private_channel.rs","reaction.rs","reaction_type.rs","stage_instance.rs","text_channel.rs","video_quality_mode.rs","voice_channel.rs","webhook.rs","webhook_type.rs"]},{"name":"gateway","dirs":[{"name":"connection_info","files":["bot_connection_info.rs","mod.rs"]},{"name":"event","files":["dispatch.rs","gateway.rs","kind.rs","mod.rs","shard.rs"]},{"name":"payload","files":["ban_add.rs","ban_remove.rs","channel_create.rs","channel_delete.rs","channel_pins_update.rs","channel_update.rs","guild_create.rs","guild_delete.rs","guild_emojis_update.rs","guild_integrations_update.rs","guild_update.rs","heartbeat.rs","identify.rs","invite_create.rs","invite_delete.rs","member_add.rs","member_chunk.rs","member_remove.rs","member_update.rs","message_create.rs","message_delete.rs","message_delete_bulk.rs","message_update.rs","mod.rs","presence_update.rs","reaction_add.rs","reaction_remove.rs","reaction_remove_all.rs","reaction_remove_emoji.rs","ready.rs","request_guild_members.rs","resume.rs","role_create.rs","role_delete.rs","role_update.rs","typing_start.rs","unavailable_guild.rs","update_status.rs","update_voice_state.rs","user_update.rs","voice_server_update.rs","voice_state_update.rs","webhooks_update.rs"]},{"name":"presence","files":["activity.rs","activity_assets.rs","activity_button.rs","activity_emoji.rs","activity_flags.rs","activity_party.rs","activity_secrets.rs","activity_timestamps.rs","activity_type.rs","client_status.rs","mod.rs","status.rs"]}],"files":["close_code.rs","intents.rs","mod.rs","opcode.rs","session_start_limit.rs"]},{"name":"guild","dirs":[{"name":"audit_log","files":["change.rs","change_key.rs","entry.rs","event.rs","mod.rs","optional_entry_info.rs","partial_integration.rs"]}],"files":["ban.rs","default_message_notification_level.rs","emoji.rs","explicit_content_filter.rs","info.rs","integration.rs","integration_account.rs","integration_application.rs","integration_expire_behavior.rs","member.rs","mfa_level.rs","mod.rs","partial_guild.rs","partial_member.rs","permissions.rs","premium_tier.rs","preview.rs","prune.rs","role.rs","role_tags.rs","system_channel_flags.rs","unavailable_guild.rs","verification_level.rs","widget.rs"]},{"name":"invite","files":["channel.rs","guild.rs","metadata.rs","mod.rs","target_type.rs","welcome_screen.rs"]},{"name":"oauth","dirs":[{"name":"team","files":["member.rs","membership_state.rs","mod.rs"]}],"files":["current_application_info.rs","id.rs","mod.rs"]},{"name":"template","files":["guild.rs","mod.rs","role.rs"]},{"name":"user","files":["connection.rs","connection_visibility.rs","current_user.rs","current_user_guild.rs","flags.rs","mod.rs","premium_type.rs","profile.rs"]},{"name":"voice","files":["close_code.rs","mod.rs","opcode.rs","voice_region.rs","voice_state.rs"]}],"files":["id.rs","lib.rs","util.rs"]};
sourcesIndex["twilight_standby"] = {"name":"","files":["futures.rs","lib.rs"]};
sourcesIndex["twilight_util"] = {"name":"","dirs":[{"name":"link","files":["mod.rs","webhook.rs"]}],"files":["lib.rs","snowflake.rs"]};
createSourceSidebar();
