export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData()
    formData.success = false
    const url = formData.get('url')
    const count = formData.get('count')

    const arrayOfUrls = []
    for (let i = 0; i < count; i++) {
      arrayOfUrls.push(url)
    }
    return { success: true, arrayOfUrls }



  }
}
