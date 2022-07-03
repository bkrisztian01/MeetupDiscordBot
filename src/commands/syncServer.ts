import { CommandInteraction } from 'discord.js';
import { Discord, Permission, Slash } from 'discordx';
import { Server } from '../channels/buildServer';
import { ADMIN_ROLE_ID, commandNames } from '../constants';

const logger = new Logger({ name: 'SyncServer' });

@Discord()
export class SyncServer {
  @Permission(false)
  @Permission({ id: ADMIN_ROLE_ID, type: 'ROLE', permission: true })
  @Slash(commandNames.server.sync)
  async syncServer(interaction: CommandInteraction): Promise<void> {
    const server = new Server();
    await server.init(interaction);
  }
}
