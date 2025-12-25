# app/api/v1/search.py
from fastapi import APIRouter, Depends, HTTPException
from app.schemas.search import SearchRequest, SearchResponse
from app.dependencies import vector_store
from app.core.security import verify_api_key
from app.services.vector_store import VectorStoreError
from app.core.rate_limiter import rate_limit
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/search", tags=["search"], dependencies=[Depends(rate_limit), Depends(verify_api_key)])

@router.post("/", response_model=SearchResponse)
def search_document(payload: SearchRequest):
    try:
        logger.info(f"Search request: query='{payload.query}', top_k={payload.top_k}")
        
        results = vector_store.search(
            query=payload.query,
            top_k=payload.top_k,
            where=payload.where,
            where_document=payload.where_document
        )
        
        logger.info(f"Search completed: {len(results)} results found")
        return {"results": results}
        
    except VectorStoreError as e:
        logger.error(f"VectorStore error during search: {str(e)}")
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        logger.exception(f"Unexpected error during search: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")