import { HttpParams } from "@angular/common/http"

export async function httpGet(parameters: string): Promise<any> {

    const response = await fetch('http://localhost:8080/GET-TOP-HEADLINES/'+parameters, {
        method: 'GET'
    })

    return await response.json()

}