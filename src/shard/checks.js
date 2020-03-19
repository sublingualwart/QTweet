import * as config from '../../config.json';
import log from '../log';

// Takes an author and returns whether or not they are an admin
export const isOwner = (author) => author.id === config.ownerID;

// Takes an author. checks that they're able to perform mod-level commands
export const isMod = async (author, qChannel) => {
  const isSomeOwner = author.id === config.ownerID
    || (!!qChannel && author.id === qChannel.ownerId());
  if (isSomeOwner) { // The user is either the channel owner or us. We can just accept their command
    return true;
  }
  const guild = await qChannel.guild();
  if (!qChannel && !guild) {
    log("User isn't an owner and we can't check for more", qChannel);
    return false;
  }
  const guildMember = guild.member(author);
  // Are they an admin or have global management rights? (means they're a moderator)
  let modRole = guildMember.permissions
    .toArray()
    .find(
      (perm) => perm === 'ADMINISTRATOR'
              || perm === 'MANAGE_GUILD'
              || perm === 'MANAGE_CHANNELS',
    );
  log(`User is some mod: ${!!modRole}`, qChannel);
  // Now we can check if they have the appropriate role
  if (!modRole) {
    modRole = guildMember.roles.find((role) => role.name === config.modRole);
    log(
      `User has the custom '${config.modRole}' role: ${!!modRole}`,
      qChannel,
    );
  }
  return (!!modRole);
};

export const isDm = (author, qChannel) => qChannel.isDM;

export const isNotDm = (author, qChannel) => !qChannel.isDM;
