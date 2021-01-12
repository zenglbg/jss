import nltk
from newspaper import Article


url = 'https://news.cctv.com/china/'


article = Article(url)

article.download() #Downloads the link’s HTML content
article.parse() #Parse the article
nltk.download('punkt')#1 time download of the sentence tokenizer
article.nlp()#  Keyword extraction wrapper


article.authors
article.publish_date
article.top_image

# print(article.html)
print(article.authors)

print(article.text)
print(article.summary)
