import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const apiUrl = 'http://localhost:5000';
const httpClient = fetchUtils.fetchJson;




const dataProvider = {
  getList: (resource, params) => {
      const { page, perPage } = params.pagination;
      const { field, order } = params.sort;
      const query = {
          sort: JSON.stringify([field, order]),
          range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
          filter: JSON.stringify(params.filter),
      };
      const url = `${apiUrl}/${resource}?${stringify(query)}`;

      return httpClient(url).then(({ headers, json }) => ({ 
           data: json.map(resource => ({ ...resource, id: resource._id }) ),
          total: parseInt(headers.get('content-range').split('/').pop(), 10),
      }));
  },
  getOne: (resource, params) =>
      httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
        data: { ...json, id: json._id },
      })),

  getMany: (resource, params) => {
      const query = {
          filter: JSON.stringify({ id: params.ids }),
      };
      const url = `${apiUrl}/${resource}?${stringify(query)}`;
      return httpClient(url).then(({ json }) => ({ 
           data: json.map(resource => ({ ...resource, id: resource._id }) ),
      }));
  },

  getManyReference: (resource, params) => {
      const { page, perPage } = params.pagination;
      const { field, order } = params.sort;
      const query = {
          sort: JSON.stringify([field, order]),
          range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
          filter: JSON.stringify({
              ...params.filter,
              [params.target]: params.id,
          }),
      };
      const url = `${apiUrl}/${resource}?${stringify(query)}`;

      return httpClient(url).then(({ headers, json }) => ({
           
          data: json.map(resource => ({ ...resource, id: resource._id }) ),
          total: parseInt(headers.get('content-range').split('/').pop(), 10),
      }));
  },

  update: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
          method: 'PUT',
          body: JSON.stringify(params.data),
      }).then(({ json }) => ({ 
        data: {...json, id: json._id },
      })),
     

  updateMany: (resource, params) => {
      const query = {
          filter: JSON.stringify({ id: params.ids}),
      };
      return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
          method: 'PUT',
          body: JSON.stringify(params.data),
      }).then(({ json }) => ({ data: json }));
  },

  create: (resource, params) =>
      httpClient(`${apiUrl}/${resource}`, {
          method: 'POST',
          body: JSON.stringify(params.data),
      }).then(({ json }) => ({
            data: { ...params.data, id: json._id },
      })),

  delete: (resource, params) =>
      httpClient(`${apiUrl}/${resource}/${params.id}`, {
          method: 'DELETE',
      }).then(({ json }) => ({ 
        data: { ...json, id: json._id },
      })),

  deleteMany: (resource, params) => {
      const query = {
          filter: JSON.stringify({ id: params.ids}),
      };
      return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
          method: 'DELETE',
          body: JSON.stringify(params.data),
      }).then(({ json }) => ({ data: json }));
  }
};

const myDataProvider = {
  ...dataProvider,
  update: (resource, params) => {
    if (resource !== 'text' || !params.data.pictures) {
        // fallback to the default implementation
        return dataProvider.update(resource, params);
    }
    /**
     * For posts update only, convert uploaded image in base 64 and attach it to
     * the `picture` sent property, with `src` and `title` attributes.
     */
    
    // Freshly dropped pictures are File objects and must be converted to base64 strings
    const newPictures = params.data.pictures.filter(
        p => p.rawFile instanceof File
    );
    const formerPictures = params.data.pictures.filter(
        p => !(p.rawFile instanceof File)
    );

    return Promise.all(newPictures.map(convertFileToBase64))
        .then(base64Pictures =>
            base64Pictures.map(picture64 => ({
                src: picture64,
                title: `${params.data.title}`,
            }))
        )
        .then(transformedNewPictures =>
            dataProvider.update(resource, {
                ...params,
                data: {
                    ...params.data,
                    pictures: [
                        ...transformedNewPictures,
                        ...formerPictures,
                    ],
                },
            })
        );
},
};

/**
* Convert a `File` object returned by the upload input into a base 64 string.
* That's not the most optimized way to store images in production, but it's
* enough to illustrate the idea of data provider decoration.
*/
const convertFileToBase64 = file =>
new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;

    reader.readAsDataURL(file.rawFile);
});


export default myDataProvider;