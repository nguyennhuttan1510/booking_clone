import instance from "@/lib/http/instance";
import {Metadata} from "@/lib/http/apis/metadata.d";
import {Response} from "@/lib/http/apis/common/response"

const getMetadata = (type: string) => {
  return instance.get<Response<Metadata[]>>(`/metadata/?type=${type}`)
}

const MetadataAPI = {
  getMetadata
}

export default MetadataAPI;