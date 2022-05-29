import { APIGatewayProxyEvent, APIGatewayProxyResultV2, Handler } from 'aws-lambda';
import { random } from 'lodash';

export const handler: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResultV2> => {
    const max = 100;
    const val = random(max);
    const response = {
        statusCode: 200,
        body: JSON.stringify(`Thea random value [max ${max}] is: ${val}`),
    };
    return response;
};