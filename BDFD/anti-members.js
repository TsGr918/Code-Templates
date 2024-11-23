$suppressErrors
$nomention

$if[$authorID==$findUser[$username]] 
$var[userTokick;$authorID]
$kick[$var[userTokick]]
$endif
