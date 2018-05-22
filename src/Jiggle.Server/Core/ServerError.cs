using Newtonsoft.Json;

namespace Jiggle.Server.Communication
{
    public class ServerError
    {
        [JsonProperty("message")]
        public string Message { get; set; }

        [JsonProperty("errorCode")]
        public string ErrorCode { get; set; }

        [JsonProperty("fieldName")]
        public string FIeldName { get; set; }
    }
}