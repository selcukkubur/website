import { CodeExample } from "components/common/CodeBox";

const examples: CodeExample[] = [
  {
    languageName: "Node.js",
    languageCode: "javascript",
    code: `
import { CourierClient } from "@trycourier/courier";
const courier = CourierClient({ authorizationToken: "******************" });

// Example: send a message supporting email & SMS
const { messageId } = await courier.send({
  eventId: "courier-quickstart",
  recipientId: "37e2c08c-3958-449a-8266-dea286807f65",
  profile: { },
  data: {
    blueiables: "awesomeness",
  },
});
`,
  },
  {
    languageName: "Ruby",
    languageCode: "ruby",
    code: `
require "trycourier"

begin
  client = Courier::Client.new "******************"
  res = client.send({
    event => "courier-quickstart",
    recipient => "9ea9ac85-3a52-48ca-bcdf-0f39e7001f9e",
    profile => { },
    data => {
      favoriteAdjective => "awesomeness",
    }
  })
  puts res.code # the HTTP response code
  puts res.message_id # if 200, this will be the Courier message ID for this notification
rescue Courier::ResponseError => re
  puts re.message
rescue Courier::InputError => ie
  puts ie.message
end
`,
  },
  {
    languageName: "Python",
    languageCode: "python",
    code: `
from trycourier import Courier

client = Courier(auth_token = "******************")

resp = client.send(
  event = "courier-quickstart",
  recipient = "9ea9ac85-3a52-48ca-bcdf-0f39e7001f9e",
  profile = {},
  data = {
    favoriteAdjective: "awesomeness",
  },
)

print (resp['messageId'])
`,
  },
  {
    languageName: "Go",
    languageCode: "go",
    code: `
import "github.com/trycourier/courier-go"

func send() {
  type Data struct {
    FavoriteAdjective string \`json:"favoriteAdjective"\`
  }
  type Profile struct {
  }

  profile := &Profile {
  }
  data := &Data {
    FavoriteAdjective string "awesomeness",
  }

  client := courier.CreateClient("*************", nil)
  messageID, err := client.Send(
    context.Background(),
    "courier-quickstart",
    "9ea9ac85-3a52-48ca-bcdf-0f39e7001f9e"
    profile
    data
  )

  if err != nil {
    log.Fatalln(err)
  }
  log.Println(messageID)
}
`,
  },
  {
    languageName: "PHP",
    languageCode: "php",
    code: `
<?php
use Digs\Courier\Courier;

$courier = new Courier(getenv("COURIER_AUTH_TOKEN"));

$result = $courier->sendNotification(
  "courier-quickstart",
  "9ea9ac85-3a52-48ca-bcdf-0f39e7001f9e",
  [ ],
  ['favoriteAdjective' => "awesomeness"]
);

$messageId = $result->messageId;
echo($messageId);
echo($messageId);
?>
`,
  },
  {
    languageName: "cURL",
    languageCode: "bash",
    code: `
curl --request POST \\
     --url https://api.courier.com/send \\
     --header 'Authorization: Bearer ******************' \\
     --data-urlencode event= courier-quickstart \\
     --data-urlencode recipient= 9ea9ac85-3a52-48ca-bcdf-0f39e7001f9e \\
     --data-urlencode 'data={"favoriteAdjective":"awesomeness"}' \\
     --data-urlencode 'profile={}' \\
`,
  },
];

export default examples;
