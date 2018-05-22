using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Jiggle.Server.Communication
{
    public class ResponseObject<TPayload>
    {
        public ResponseObject()
        {
        }

        public ResponseObject(TPayload payload) => Payload = payload;

        public ResponseObject(IEnumerable<ServerError> errors) => Errors = errors;

        [JsonProperty("payload")]
        public TPayload Payload { get; set; }

        [JsonProperty("errors")]
        public IEnumerable<ServerError> Errors { get; set; }
    }
}
