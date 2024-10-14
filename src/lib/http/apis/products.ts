import instance from "@/lib/http/instance";
import * as querystring from "querystring";
import {QueryGetOrganization, Organization} from './products.d'
import {Response} from '@/lib/http/apis/common/response'

const getOrganizations = (queryParams: Partial<QueryGetOrganization>) => {
  const queryString = querystring.stringify(queryParams)
  return instance.get(`/services/?${queryString}`)
}

const getOrganization = (organizationID: string) => {
  if(!organizationID) throw new Error(' Not found organization ID')
  return instance.get<Response<Organization>>(`/organizations/${organizationID}`)
}

const ProductAPI = {
  getOrganizations,
  getOrganization
}

export default ProductAPI