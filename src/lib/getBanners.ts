export const getBanners = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_WP_URL_API}pages?slug=home-site`)
  const data = await response.json()
  if (!response.ok) {
    throw new Error('Falha ao buscar os banner, por favor tente novamente.')
  }

  // Nova estrutura da API - banners_data é um array
  const bannersData = data[0].banners_data || []
  const configsSlider = data[0].configs_slider || {}
  


  // Transforma a estrutura da API para o formato esperado pelo componente
  const banners = bannersData.map((banner: any) => ({
    mobile: {
      url_imagem: banner.mobile_image?.url || '',
      link: banner.link || '',
      target: banner.link ? '_blank' : undefined,
      title: banner.title || '',
      alt: banner.alt || ''
    },
    desktop: {
      url_imagem: banner.desktop_image?.url || '',
      link: banner.link || '',
      target: banner.link ? '_blank' : undefined,
      title: banner.title || '',
      alt: banner.alt || ''
    }
  }))



  return {
    banners,
    configs: {
      speed: configsSlider.speed || 500,
      autoplay: configsSlider.autoplay || true,
      autoplaySpeed: configsSlider.autoplaySpeed || 3000,
      pauseOnHover: configsSlider.pauseOnHover || true
    }
  }
}
