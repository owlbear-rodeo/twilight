var sourcesIndex = JSON.parse('{\
"twilight":["",[],["lib.rs"]],\
"twilight_cache_inmemory":["",[["event",[],["channel.rs","emoji.rs","guild.rs","integration.rs","interaction.rs","member.rs","message.rs","mod.rs","presence.rs","reaction.rs","role.rs","stage_instance.rs","sticker.rs","thread.rs","voice_state.rs"]],["model",[],["emoji.rs","guild.rs","member.rs","message.rs","mod.rs","presence.rs","sticker.rs","voice_state.rs"]]],["builder.rs","config.rs","iter.rs","lib.rs","permission.rs","stats.rs"]],\
"twilight_gateway":["",[["cluster",[],["builder.rs","config.rs","event.rs","impl.rs","mod.rs","scheme.rs"]],["shard",[["processor",[["compression",[],["inflater.rs","mod.rs"]]],["heartbeat.rs","impl.rs","mod.rs","session.rs","socket_forwarder.rs"]]],["builder.rs","command.rs","config.rs","emitter.rs","event.rs","impl.rs","json.rs","mod.rs","raw_message.rs","stage.rs","tls.rs"]]],["event.rs","lib.rs"]],\
"twilight_gateway_queue":["",[],["day_limiter.rs","large_bot_queue.rs","lib.rs"]],\
"twilight_http":["",[["client",[],["builder.rs","connector.rs","interaction.rs","mod.rs"]],["request",[["application",[["command",[["create_global_command",[],["chat_input.rs","message.rs","mod.rs","user.rs"]],["create_guild_command",[],["chat_input.rs","message.rs","mod.rs","user.rs"]]],["delete_global_command.rs","delete_guild_command.rs","get_command_permissions.rs","get_global_command.rs","get_global_commands.rs","get_guild_command.rs","get_guild_command_permissions.rs","get_guild_commands.rs","mod.rs","set_global_commands.rs","set_guild_commands.rs","update_command_permissions.rs","update_global_command.rs","update_guild_command.rs"]],["interaction",[],["create_followup.rs","create_response.rs","delete_followup.rs","delete_response.rs","get_followup.rs","get_response.rs","mod.rs","update_followup.rs","update_response.rs"]]],["mod.rs"]],["channel",[["invite",[],["create_invite.rs","delete_invite.rs","get_channel_invites.rs","get_invite.rs","mod.rs"]],["message",[],["create_message.rs","crosspost_message.rs","delete_message.rs","delete_messages.rs","get_channel_messages.rs","get_channel_messages_configured.rs","get_message.rs","mod.rs","update_message.rs"]],["reaction",[],["create_reaction.rs","delete_all_reaction.rs","delete_all_reactions.rs","delete_reaction.rs","get_reactions.rs","mod.rs"]],["stage",[],["create_stage_instance.rs","delete_stage_instance.rs","get_stage_instance.rs","mod.rs","update_stage_instance.rs"]],["thread",[["create_forum_thread",[],["message.rs","mod.rs"]]],["add_thread_member.rs","create_thread.rs","create_thread_from_message.rs","get_joined_private_archived_threads.rs","get_private_archived_threads.rs","get_public_archived_threads.rs","get_thread_member.rs","get_thread_members.rs","join_thread.rs","leave_thread.rs","mod.rs","remove_thread_member.rs","update_thread.rs"]],["webhook",[],["create_webhook.rs","delete_webhook.rs","delete_webhook_message.rs","execute_webhook.rs","execute_webhook_and_wait.rs","get_channel_webhooks.rs","get_webhook.rs","get_webhook_message.rs","mod.rs","update_webhook.rs","update_webhook_message.rs","update_webhook_with_token.rs"]]],["create_pin.rs","create_typing_trigger.rs","delete_channel.rs","delete_channel_permission.rs","delete_channel_permission_configured.rs","delete_pin.rs","follow_news_channel.rs","get_channel.rs","get_pins.rs","mod.rs","update_channel.rs","update_channel_permission.rs"]],["guild",[["auto_moderation",[],["create_auto_moderation_rule.rs","delete_auto_moderation_rule.rs","get_auto_moderation_rule.rs","get_guild_auto_moderation_rules.rs","mod.rs","update_auto_moderation_rule.rs"]],["ban",[],["create_ban.rs","delete_ban.rs","get_ban.rs","get_bans.rs","mod.rs"]],["create_guild",[],["builder.rs","mod.rs"]],["emoji",[],["create_emoji.rs","delete_emoji.rs","get_emoji.rs","get_emojis.rs","mod.rs","update_emoji.rs"]],["integration",[],["delete_guild_integration.rs","get_guild_integrations.rs","mod.rs"]],["member",[],["add_guild_member.rs","add_role_to_member.rs","get_guild_members.rs","get_member.rs","mod.rs","remove_member.rs","remove_role_from_member.rs","search_guild_members.rs","update_guild_member.rs"]],["role",[],["create_role.rs","delete_role.rs","get_guild_roles.rs","mod.rs","update_role.rs","update_role_positions.rs"]],["sticker",[],["create_guild_sticker.rs","delete_guild_sticker.rs","get_guild_sticker.rs","get_guild_stickers.rs","mod.rs","update_guild_sticker.rs"]],["user",[],["mod.rs","update_current_user_voice_state.rs","update_user_voice_state.rs"]]],["create_guild_channel.rs","create_guild_prune.rs","delete_guild.rs","get_active_threads.rs","get_audit_log.rs","get_guild.rs","get_guild_channels.rs","get_guild_invites.rs","get_guild_preview.rs","get_guild_prune_count.rs","get_guild_vanity_url.rs","get_guild_voice_regions.rs","get_guild_webhooks.rs","get_guild_welcome_screen.rs","get_guild_widget.rs","mod.rs","update_current_member.rs","update_guild.rs","update_guild_channel_positions.rs","update_guild_mfa.rs","update_guild_welcome_screen.rs","update_guild_widget.rs"]],["scheduled_event",[["create_guild_scheduled_event",[],["external.rs","mod.rs","stage_instance.rs","voice.rs"]]],["delete_guild_scheduled_event.rs","get_guild_scheduled_event.rs","get_guild_scheduled_event_users.rs","get_guild_scheduled_events.rs","mod.rs","update_guild_scheduled_event.rs"]],["sticker",[],["get_nitro_sticker_packs.rs","get_sticker.rs","mod.rs"]],["template",[],["create_guild_from_template.rs","create_template.rs","delete_template.rs","get_template.rs","get_templates.rs","mod.rs","sync_template.rs","update_template.rs"]],["user",[],["create_private_channel.rs","get_current_user.rs","get_current_user_connections.rs","get_current_user_guild_member.rs","get_current_user_guilds.rs","get_user.rs","leave_guild.rs","mod.rs","update_current_user.rs"]]],["attachment.rs","audit_reason.rs","base.rs","get_gateway.rs","get_gateway_authed.rs","get_user_application.rs","get_voice_regions.rs","mod.rs","multipart.rs","try_into_request.rs"]],["response",[],["future.rs","marker.rs","mod.rs","status_code.rs"]]],["api_error.rs","error.rs","json.rs","lib.rs","routing.rs"]],\
"twilight_http_ratelimiting":["",[["in_memory",[],["bucket.rs","mod.rs"]]],["headers.rs","lib.rs","request.rs","ticket.rs"]],\
"twilight_lavalink":["",[],["client.rs","http.rs","lib.rs","model.rs","node.rs","player.rs"]],\
"twilight_mention":["",[["parse",[],["error.rs","impl.rs","iter.rs","mod.rs"]]],["fmt.rs","lib.rs","timestamp.rs"]],\
"twilight_model":["",[["application",[["command",[],["command_type.rs","mod.rs","option.rs","permissions.rs"]],["interaction",[["application_command",[],["mod.rs","option.rs","resolved.rs"]]],["interaction_type.rs","message_component.rs","mod.rs","modal.rs"]]],["mod.rs"]],["channel",[["message",[["allowed_mentions",[],["builder.rs","mod.rs"]],["component",[],["action_row.rs","button.rs","kind.rs","mod.rs","select_menu.rs","text_input.rs"]],["embed",[],["author.rs","field.rs","footer.rs","image.rs","mod.rs","provider.rs","thumbnail.rs","video.rs"]],["sticker",[],["format_type.rs","kind.rs","message.rs","mod.rs","pack.rs"]]],["activity.rs","application.rs","flags.rs","interaction.rs","kind.rs","mention.rs","mod.rs","reaction.rs","reference.rs","role_subscription_data.rs"]],["stage_instance",[],["mod.rs","privacy_level.rs"]],["thread",[],["auto_archive_duration.rs","listing.rs","member.rs","metadata.rs","mod.rs"]],["webhook",[],["channel.rs","guild.rs","kind.rs","mod.rs"]]],["attachment.rs","channel_mention.rs","channel_type.rs","flags.rs","followed_channel.rs","forum.rs","mod.rs","permission_overwrite.rs","video_quality_mode.rs"]],["gateway",[["connection_info",[],["bot_connection_info.rs","mod.rs"]],["event",[],["dispatch.rs","gateway.rs","kind.rs","mod.rs","shard.rs"]],["payload",[["incoming",[],["auto_moderation_action_execution.rs","auto_moderation_rule_create.rs","auto_moderation_rule_delete.rs","auto_moderation_rule_update.rs","ban_add.rs","ban_remove.rs","channel_create.rs","channel_delete.rs","channel_pins_update.rs","channel_update.rs","command_permissions_update.rs","guild_create.rs","guild_delete.rs","guild_emojis_update.rs","guild_integrations_update.rs","guild_scheduled_event_create.rs","guild_scheduled_event_delete.rs","guild_scheduled_event_update.rs","guild_scheduled_event_user_add.rs","guild_scheduled_event_user_remove.rs","guild_stickers_update.rs","guild_update.rs","integration_create.rs","integration_delete.rs","integration_update.rs","interaction_create.rs","invite_create.rs","invite_delete.rs","member_add.rs","member_chunk.rs","member_remove.rs","member_update.rs","message_create.rs","message_delete.rs","message_delete_bulk.rs","message_update.rs","mod.rs","presence_update.rs","reaction_add.rs","reaction_remove.rs","reaction_remove_all.rs","reaction_remove_emoji.rs","ready.rs","role_create.rs","role_delete.rs","role_update.rs","stage_instance_create.rs","stage_instance_delete.rs","stage_instance_update.rs","thread_create.rs","thread_delete.rs","thread_list_sync.rs","thread_member_update.rs","thread_members_update.rs","thread_update.rs","typing_start.rs","unavailable_guild.rs","user_update.rs","voice_server_update.rs","voice_state_update.rs","webhooks_update.rs"]],["outgoing",[],["heartbeat.rs","identify.rs","mod.rs","request_guild_members.rs","resume.rs","update_presence.rs","update_voice_state.rs"]]],["mod.rs"]],["presence",[],["activity.rs","activity_assets.rs","activity_button.rs","activity_emoji.rs","activity_flags.rs","activity_party.rs","activity_secrets.rs","activity_timestamps.rs","activity_type.rs","client_status.rs","minimal_activity.rs","mod.rs","status.rs"]]],["close_code.rs","intents.rs","mod.rs","opcode.rs","reaction.rs","session_start_limit.rs"]],["guild",[["audit_log",[],["change.rs","change_key.rs","entry.rs","event_type.rs","integration.rs","mod.rs","optional_entry_info.rs"]],["auto_moderation",[],["action.rs","event_type.rs","mod.rs","preset_type.rs","trigger_metadata.rs","trigger_type.rs"]],["invite",[],["channel.rs","guild.rs","mod.rs","target_type.rs","welcome_screen.rs"]],["scheduled_event",[],["mod.rs","user.rs"]],["template",[],["guild.rs","mod.rs","role.rs"]]],["ban.rs","default_message_notification_level.rs","emoji.rs","explicit_content_filter.rs","feature.rs","info.rs","integration.rs","integration_account.rs","integration_application.rs","integration_expire_behavior.rs","member.rs","mfa_level.rs","mod.rs","nsfw_level.rs","partial_guild.rs","partial_member.rs","permissions.rs","premium_tier.rs","preview.rs","prune.rs","role.rs","role_tags.rs","system_channel_flags.rs","unavailable_guild.rs","vanity_url.rs","verification_level.rs","widget.rs"]],["http",[],["attachment.rs","interaction.rs","mod.rs","permission_overwrite.rs"]],["id",[],["marker.rs","mod.rs"]],["oauth",[["team",[],["member.rs","membership_state.rs","mod.rs"]]],["application.rs","application_flags.rs","install_params.rs","mod.rs","partial_application.rs","scope.rs"]],["user",[],["connection.rs","connection_visibility.rs","current_user.rs","current_user_guild.rs","flags.rs","mod.rs","premium_type.rs","profile.rs"]],["util",[["datetime",[],["display.rs","error.rs","mod.rs"]]],["image_hash.rs","mod.rs"]],["voice",[],["close_code.rs","mod.rs","opcode.rs","voice_region.rs","voice_state.rs"]]],["lib.rs","visitor.rs"]],\
"twilight_standby":["",[],["future.rs","lib.rs"]],\
"twilight_util":["",[["builder",[["embed",[],["author.rs","field.rs","footer.rs","image_source.rs","mod.rs"]]],["command.rs","interaction_response_data.rs","mod.rs"]],["link",[],["mod.rs","webhook.rs"]],["permission_calculator",[],["bitops.rs","mod.rs","preset.rs"]]],["lib.rs","snowflake.rs"]],\
"twilight_validate":["",[],["channel.rs","command.rs","component.rs","embed.rs","lib.rs","message.rs","request.rs","sticker.rs"]]\
}');
createSourceSidebar();
