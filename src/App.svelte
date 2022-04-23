<script>
  import Header from '~/components/Header.svelte'
  import ListContainer from '~/components/ListContainer.svelte'

  // 메인 이미지 설정
  document.body.style.backgroundColor = 'darkgray'
  document.body.style.backgroundImage = 'url(/images/bg.jpg)'
  document.body.style.backgroundSize = 'cover'

</script>

<Header />
<ListContainer />