from newspaper import Article
url = 'http://www.bbc.co.uk/zhongwen/simp/chinese_news/2012/12/121210_hongkong_politics.shtml'
url1 = 'https://www.bbc.com/zhongwen/simp/columns-55520247'

a = Article(url1, language='zh') # Chinese
a.download()

a.parse()

print(a.text[:1500])