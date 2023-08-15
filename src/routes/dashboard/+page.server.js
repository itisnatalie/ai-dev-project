export const actions = {
  default: async ({ request }) => {
    await new Promise((fulfil) => setTimeout(fulfil, 1000));
    const formData = await request.formData()
    formData.success = false
    const url = formData.get('url')
    const count = formData.get('count')

    const arrayOfUrls = []
    for (let i = 0; i < count; i++) {
      arrayOfUrls.push(url)
    }

    return { arrayOfUrls }



  }
}
