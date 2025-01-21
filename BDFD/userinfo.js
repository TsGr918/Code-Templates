$nomention
$suppressErrors
$var[user;$findUser[$message[user];yes]]

$authorIcon[$userAvatar[$var[user]]]
$author[$username[$var[user]]#$discriminator[$var[user]]]

$description[<@$var[user]>]

$addField[Joined;$userJoined[0$var[user];*`Mon, Jan 2, 2006 3:04 AM`*];yes]

$addField[Registered;$userJoinedDiscord[0$var[user];*`Mon, Jan 2, 2006 3:04 PM`*];yes]

$textSplit[$userRoles[$var[user]];]

$addField[Key Permissions;$replaceText[$replaceText[$checkCondition[$checkUserPerms[$var[user];admin]!=true];true;;1];false;Administrator,;1] $replaceText[$replaceText[$checkCondition[$checkUserPerms[$var[user];ban]!=true];true;;1];false;Ban Members,;1] $replaceText[$replaceText[$checkCondition[$checkUserPerms[$var[user];manageserver]!=true];true;;1];false;Manage Server,;1] $replaceText[$replaceText[$checkCondition[$checkUserPerms[$var[user];manageroles]!=true];true;;1];false;Manage Roles,;1] $replaceText[$replaceText[$checkCondition[$checkUserPerms[$var[user];managechannels]!=true];true;;1];false;Manage Channels,;1] $replaceText[$replaceText[$checkCondition[$checkUserPerms[$var[user];mentioneveryone]!=true];true;;1];false;Mention Everyone,;1] $replaceText[$replaceText[$checkCondition[$checkUserPerms[$var[user];managemessages]!=true];true;;1];false;Manage Messages,;1] $replaceText[$replaceText[$checkCondition[$checkUserPerms[$var[user];kick]!=true];true;;1];false;Kick Members,;1] $replaceText[$replaceText[$checkCondition[$checkUserPerms[$var[user];managenicknames]!=true];true;;1];false;Manage Nickname,;1] $replaceText[$replaceText[$checkCondition[$checkUserPerms[$var[user];readmessages]!=true];true;;1];false;Read Messages,;1] $replaceText[$replaceText[$checkCondition[$checkUserPerms[$var[user];sendmessages]!=true];true;;1];false;Send Messages;1]]

$addField[Acknowledgements;
$replaceText[$replaceText[$checkCondition[$serverOwner!=$var[user]];true;;1];false;Server Owner;1] 
$if[$authorID!=$var[user]]$replaceText[$replaceText[$checkCondition[$checkUserPerms[$var[user];admin]!=true];true;;1];false;Server Admin;1]
$endif
$replaceText[$replaceText[$checkCondition[$checkUserPerms[$var[user];admin]!=true];true;Normal Member;1];false;;1]]

$color[$getRoleColor[$highestRole[$authorID]]]
$thumbnail[$userAvatar[$var[user]]]
$footer[ID: $var[user]]
$addTimestamp
